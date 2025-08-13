import React from 'react';

// Define the cities to be displayed as buttons
const coastalCities = [
  { name: 'Bremerhaven', lat: 53.5416, lon: 8.5714 },
  { name: 'Cuxhaven', lat: 53.8604, lon: 8.6946 },
  { name: 'Kiel', lat: 54.3233, lon: 10.1394 },
  { name: 'Rostock', lat: 54.0924, lon: 12.1158 },
  { name: 'Lübeck', lat: 53.8655, lon: 10.6865 },
];

interface CityButtonsProps {
  onSelect: (city: { name: string; lat: number; lon: number }) => void;
}

const CityButtons: React.FC<CityButtonsProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-4">
      {coastalCities.map((city) => (
        <button
          key={city.name}
          onClick={() => onSelect(city)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default CityButtons;