import { useState, useEffect } from 'react';
import { IWeatherData } from '../types/weather';

const processApiData = (marineApiResponse: any, weatherApiResponse: any, tideApiResponse: any): IWeatherData | null => {
    const hourly = marineApiResponse.hourly;
    const daily = weatherApiResponse.daily;
    const currentHourIndex = new Date().getHours();

    if (!hourly || !daily) {
        console.error("API response is missing required hourly or daily data.");
        return null;
    }
    
    // Process daily forecast from the weather API response
    const dailyForecast = daily.time.slice(0, 4).map((date, index) => {
        const day = index === 0 ? 'Today' :
                    index === 1 ? 'Tomorrow' :
                    `Day ${index + 1}`;
        
        const tempMin = daily.temperature_2m_min[index];
        const tempMax = daily.temperature_2m_max[index];
        const tempRange = `${tempMax}°C / ${tempMin}°C`;

        return { day, tempRange };
    });

    // Process tide data from a separate API response
    const tideData = tideApiResponse?.heights?.map(tide => ({
        time: new Date(tide.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        height: `${tide.height}m`,
        type: tide.type === 'low' ? 'Low Tide' : 'High Tide',
    })) || [];

    const currentDetail = {
        wind: {
            speed: "N/A", // Wind data still not available from this marine API
            direction: "N/A",
        },
        swell: {
            height: `${hourly.swell_wave_height?.[currentHourIndex] ?? 'N/A'}m`,
            period: `${hourly.swell_wave_period?.[currentHourIndex] ?? 'N/A'}s`,
            direction: `${hourly.swell_wave_direction?.[currentHourIndex] ?? 'N/A'}°`,
        },
        waterTemp: `${hourly.sea_surface_temperature?.[currentHourIndex] ?? 'N/A'}°C`,
    };

    return {
        forecast: dailyForecast,
        detail: currentDetail,
        tide: tideData,
    };
};

const useWeatherController = (lat: number | null, lon: number | null) => {
    const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllData = async () => {
            if (typeof lat !== 'number' || typeof lon !== 'number') {
                setLoading(false);
                setWeatherData(null);
                return;
            }
            
            setLoading(true);
            setError(null);
            setWeatherData(null);

            try {
                const [marineResponse, weatherResponse, tideResponse] = await Promise.all([
                    fetch(`/api/weather?lat=${lat}&lon=${lon}`), // Your marine API route
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`), // New daily forecast API
                    fetch(`/api/tide?lat=${lat}&lon=${lon}`), // Your tide API route
                ]);

                if (!marineResponse.ok) {
                    throw new Error('Failed to fetch marine data.');
                }
                const marineData = await marineResponse.json();

                if (!weatherResponse.ok) {
                     throw new Error('Failed to fetch weather forecast data.');
                }
                const weatherData = await weatherResponse.json();

                const tideData = tideResponse.ok ? await tideResponse.json() : { heights: [] }; 
                
                const processedData = processApiData(marineData, weatherData, tideData);
                if (processedData) {
                    setWeatherData(processedData);
                } else {
                    setError("No weather data available for this location.");
                }

            } catch (err) {
                console.error("API Fetch Error:", err);
                setError("Failed to fetch weather data. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, [lat, lon]);

    return { weatherData, loading, error };
};

export default useWeatherController;