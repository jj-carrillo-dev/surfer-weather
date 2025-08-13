"use client";

import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDataDisplay from './components/WeatherDataDisplay/WeatherDataDisplay';
import CityButtons from './components/CityButtons'; 

const ForecastPage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                    Surf Forecast
                </h1>
                <div className="relative mb-8">
                    <SearchBar onSelectLocation={handleSelectLocation} />
                    {/* Add the new CityButtons component here */}
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