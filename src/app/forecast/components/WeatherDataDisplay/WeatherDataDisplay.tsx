"use client";

import { useTranslation } from 'react-i18next'; 
import useWeatherController from '@/app/hooks/useWeatherController';
import ForecastCard from './components/ForecastCard';
import ForecastDetailCard from './components/ForecastDetailCard';
import TideChart from './components/TideChart';

const WeatherDataDisplay = ({ lat, lon, locationName }) => {
    const { t } = useTranslation(); // Initialize the translation hook
    const { weatherData, loading, error } = useWeatherController(lat, lon, t);
    const currentYear = new Date().getFullYear();

    if (loading) {
        return (
            <div className="flex items-center justify-center p-4">
                <div className="text-xl text-gray-600 dark:text-gray-400">{t('loading_forecast')}</div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!weatherData) {
        return <div className="text-gray-500 text-center">{t('no_location_selected')}</div>;
    }

    // Handle cases where marine data is not available (e.g., landlocked city)
    if (weatherData.detail.swell.height === 'N/A') {
        return (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {t('no_marine_data_text', { locationName })}
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                {t('weather_forecast_for', { locationName })}
            </h2>
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {weatherData.forecast.map((forecast, index) => (
                        <ForecastCard
                            key={index}
                            day={t(forecast.day.toLowerCase())} // Use translation key for day
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
                    © {currentYear} {t('footer_text')}
                </footer>
            </div>
        </div>
    );
};

export default WeatherDataDisplay;