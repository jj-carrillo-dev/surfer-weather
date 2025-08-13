import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

const SwellCard = ({ swell }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-inner">
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faWaveSquare} className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Swell</h4>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300 text-lg">{swell.height}</p>
          <p className="text-gray-500 dark:text-gray-400">Height</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300 text-lg">{swell.period}</p>
          <p className="text-gray-500 dark:text-gray-400">Period</p>
        </div>
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300 text-lg">{swell.direction}</p>
          <p className="text-gray-500 dark:text-gray-400">Direction</p>
        </div>
      </div>
    </div>
  );
};

export default SwellCard;