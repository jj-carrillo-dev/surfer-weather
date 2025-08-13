import React from 'react';
import WaveIcon from "../icons/WaveIcon";

const Header = ({ t, i18n }) => {
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="text-center"> 
      <div className="flex justify-center mb-4">
        <button onClick={() => handleLanguageChange('en')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200 mr-2">
            {t('lang_en')}
        </button>
        <button onClick={() => handleLanguageChange('de')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200">
            {t('lang_de')}
        </button>
      </div>
      <div className="flex justify-center animate-bounce"> 
        <WaveIcon className="w-12 h-12 text-blue-600" /> 
      </div>
      <h1 className="mt-4 text-4xl font-extrabold text-blue-900 tracking-tight">
        {t('app_name')}
      </h1>
      <p className="mt-2 text-blue-700">{t('germany')}</p>
    </div>
  )
}
export default Header;