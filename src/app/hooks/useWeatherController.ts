import { useState, useEffect } from 'react';
import { IWeatherData } from '../types/weather';

const processApiData = (
    marineApiResponse: any, 
    weatherApiResponse: any, 
    t: (key: string, options?: any) => string
): IWeatherData | null => {
    const hourly = marineApiResponse.hourly;
    const daily = weatherApiResponse.daily;
    const currentHourIndex = new Date().getHours();
    
    // Process daily forecast from the weather API response
    const dailyForecast = daily.time.slice(0, 4).map((date, index) => {
        // Return the simple translation key, not the translated string
        const dayKey = index === 0 ? 'today' :
                       index === 1 ? 'tomorrow' :
                       `day_${index + 1}`;
        
        const tempMin = daily.temperature_2m_min[index];
        const tempMax = daily.temperature_2m_max[index];
        const tempRange = `${tempMax}°C / ${tempMin}°C`;

        return { day: dayKey, tempRange };
    });

    const currentDetail = {
        wind: {
            speed: "N/A", 
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
        tide: [],
    };
};


const useWeatherController = (lat: number | null, lon: number | null, t: (key: string, options?: any) => string) => {
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
                const [marineResponse, weatherResponse] = await Promise.all([
                    fetch(`/api/weather?lat=${lat}&lon=${lon}`),
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`),
                ]);

                if (!marineResponse.ok) {
                    throw new Error(t('error_fetch_marine_data'));
                }
                const marineData = await marineResponse.json();

                if (!weatherResponse.ok) {
                    throw new Error(t('error_fetch_weather_forecast'));
                }
                const weatherData = await weatherResponse.json();

                const processedData = processApiData(marineData, weatherData, t);
                if (processedData) {
                    setWeatherData(processedData);
                } else {
                    setError(t('no_weather_data_available'));
                }

            } catch (err) {
                console.error("API Fetch Error:", err);
                setError(t('error_try_again'));
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, [lat, lon, t]);

    return { weatherData, loading, error };
};
export default useWeatherController;