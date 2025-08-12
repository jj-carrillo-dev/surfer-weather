import Link from 'next/link';

const WeatherCard = () => {
  return (
    <div className="bg-white/90 text-center backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
      <p className="text-lg text-gray-700 mb-6 text-center">
        Check real-time wind and wave conditions
      </p>
      <Link href="/forecast" className="w-full">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
          Get Forecast →
        </button>
      </Link>
    </div>
  );
};

export default WeatherCard;