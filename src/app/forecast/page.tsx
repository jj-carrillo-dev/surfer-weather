"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDataDisplay from './components/WeatherDataDisplay/WeatherDataDisplay';
import CityButtons from './components/CityButtons';
import Header from './components/Header/Header';

const ForecastPage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const { t, i18n } = useTranslation();

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-4 mb-8">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Header t={t} i18n={i18n} />
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                    {t('app_name')}
                </h1>
                <div className="relative mb-8">
                    <SearchBar t={t} onSelectLocation={handleSelectLocation} />
                    <h2 className="text-lg font-semibold text-center text-gray-700 dark:text-gray-300 mt-6 mb-4">
                        {t('coastal_city_title')}
                    </h2>
                    <CityButtons onSelect={handleSelectLocation} />
                </div>
                <WeatherDataDisplay
                    lat={selectedLocation?.lat}
                    lon={selectedLocation?.lon}
                    locationName={selectedLocation?.name}
                />
            </div>
        </div>
    );
};

export default ForecastPage;