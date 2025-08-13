import TideItem from "./components/TideItem";


const TideChart = ({ tideData }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Tide Chart</h3>
      <ul className="space-y-4">
        {tideData.map((tide, index) => (
          <TideItem key={index} tide={tide} />
        ))}
      </ul>
    </div>
  );
};

export default TideChart;