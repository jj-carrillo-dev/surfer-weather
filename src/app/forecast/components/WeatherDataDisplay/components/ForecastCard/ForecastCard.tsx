// src/app/forecast/components/ForecastCard/ForecastCard.tsx

import React from 'react';

interface ForecastCardProps {
  day: string;
  tempRange: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ day, tempRange }) => {
  return (
    <div className="grid place-items-center h-[100px] bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="font-semibold text-lg">{day}</h3>
      <p className="text-gray-500">{tempRange}</p>
    </div>
  );
};

export default ForecastCard;