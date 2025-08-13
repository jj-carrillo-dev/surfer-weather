"use client";

import useWeatherController from '@/app/hooks/useWeatherController';
import ForecastCard from './components/ForecastCard';
import ForecastDetailCard from './components/ForecastDetailCard';
import TideChart from './components/TideChart';

const WeatherDataDisplay = ({ lat, lon, locationName }) => {
    const { weatherData, loading, error } = useWeatherController (lat, lon);

    const currentYear = new Date().getFullYear();

    if (loading) {
        return (
            <div className="flex items-center justify-center p-4">
                <div className="text-xl text-gray-600 dark:text-gray-400">Loading forecast...</div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!weatherData) {
        return <div className="text-gray-500 text-center">No location selected. Please use the search bar.</div>;
    }

    // Handle cases where marine data is not available (e.g., landlocked city)
    if (weatherData.detail.swell.height === 'N/A') {
        return (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No marine data available for {locationName}. Please select a coastal city.
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                Weather Forecast for {locationName}
            </h2>
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {weatherData.forecast.map((forecast, index) => (
                        <ForecastCard
                            key={index}
                            day={forecast.day}
                            tempRange={forecast.tempRange}
                        />
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <ForecastDetailCard detail={weatherData.detail} />

                {/* * This component is commented out because the free Open-Meteo API
                 * does not provide tide data. A separate API (e.g., WorldTides)
                 * would be needed to display this information.
                 */}
                {weatherData.tide.length > 0 && <TideChart tideData={weatherData.tide} />}
                </div>
                <footer className="w-full text-center text-gray-500 dark:text-gray-400 p-4 mt-8">
                © {currentYear} Surf Forecast App
              </footer>
            </div>
        </div>
    );
};

export default WeatherDataDisplay;