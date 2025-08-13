import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TideItem = ({ tide }) => {
  const isHighTide = tide.type.includes('High');
  const tideIcon = isHighTide ? faArrowUp : faArrowDown;

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-lg shadow-sm transition-all duration-200 ${
        isHighTide
          ? 'bg-gradient-to-r from-blue-50 dark:from-blue-900'
          : 'bg-gradient-to-r from-gray-50 dark:from-gray-900'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800">
          <FontAwesomeIcon icon={tideIcon} className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <div className="font-semibold text-gray-800 dark:text-gray-100">{tide.type}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{tide.time}</div>
        </div>
      </div>
      <span className="font-bold text-blue-600 dark:text-blue-400">{tide.height}</span>
    </li>
  );
};

export default TideItem;