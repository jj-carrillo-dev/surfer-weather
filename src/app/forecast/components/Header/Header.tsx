import Link from 'next/link';
import React from 'react';

const Header = ({ t, i18n }) => {
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center justify-between text-white relative w-full">
      <Link href="/" className="z-10">
        <button className="flex items-center px-4 py-2 font-medium transition-colors duration-200 hover:text-gray-200">
          {t('back')}
        </button>
      </Link>
      <div className="absolute inset-x-0 flex justify-center">
        <h1 className="text-xl font-bold">{t('detailed_forecast')}</h1>
      </div>
      <div className="flex gap-2 z-10">
        <button onClick={() => handleLanguageChange('en')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200">
            {t('lang_en')}
        </button>
        <button onClick={() => handleLanguageChange('de')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200">
            {t('lang_de')}
        </button>
      </div>
    </div>
  );
};

export default Header;