"use client";

import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDataDisplay from './components/WeatherDataDisplay/WeatherDataDisplay';
import CityButtons from './components/CityButtons';
import Header from './components/Header';

const ForecastPage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="min-h-screen bg-gray-100  dark:bg-gray-900">
            <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-4 mb-8">
                <div className="container mx-auto px-4">
                    <Header />
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                    Surf Forecast
                </h1>
                <div className="relative mb-8">
                    <SearchBar onSelectLocation={handleSelectLocation} />
                    <h2 className="text-lg font-semibold text-center text-gray-700 dark:text-gray-300 mt-6 mb-4">
                        Or select a German coastal city:
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