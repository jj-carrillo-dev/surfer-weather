import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import SwellCard from './components/SwellCard';
import WindCard from './components/WindCard';
import WaterTempCard from './components/WaterTempCard';

const ForecastDetailCard = ({ detail }) => {

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4 space-x-3">
        <FontAwesomeIcon icon={faWaveSquare} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Surf Conditions</h3>
      </div>
      <div className="space-y-6">
        <SwellCard swell={detail.swell} />
        {detail.wind.hasData &&
          <WindCard wind={detail.wind} />
        }
        <WaterTempCard waterTemp={detail.waterTemp} />
      </div>
    </div>
  );
};

export default ForecastDetailCard;