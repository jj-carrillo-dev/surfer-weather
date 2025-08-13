import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const WindCard = ({ wind }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-inner">
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faWind} className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Wind</h4>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-sm">
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300 text-lg">{wind.speed}</p>
          <p className="text-gray-500 dark:text-gray-400">Speed</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300 text-lg">{wind.direction}</p>
          <p className="text-gray-500 dark:text-gray-400">Direction</p>
        </div>
      </div>
    </div>
  );
};

export default WindCard;