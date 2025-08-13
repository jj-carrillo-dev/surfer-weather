import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const WaterTempCard = ({ waterTemp }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-inner">
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faWater} className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{t('water_temperature')}</h4>
      </div>
      <p className="text-center font-bold text-gray-700 dark:text-gray-300 text-2xl">{waterTemp}</p>
    </div>
  );
};

export default WaterTempCard;