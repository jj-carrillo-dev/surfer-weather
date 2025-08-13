const ForecastCard = ({ day, tempRange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center transition-transform transform hover:scale-105 duration-200">
      <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{day}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{tempRange}</p>
    </div>
  );
};

export default ForecastCard;