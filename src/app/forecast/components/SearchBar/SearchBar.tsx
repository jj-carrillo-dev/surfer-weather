"use client";

import React from 'react';
import SearchIcon from './components/SearchIcon';
import SuggestionsList from './components/SuggestionsList';
import useSearchController from '@/app/hooks/useSearchController';

const SearchBar = ({ t, onSelectLocation }) => {
  const {
    location,
    suggestions,
    isSearching,
    handleInputChange,
    handleSuggestionClick,
    handleSearchClick,
  } = useSearchController(onSelectLocation);

  return (
    <div className="relative">
      <div className="flex items-center p-2 pl-4 bg-white rounded-xl shadow-lg border border-gray-200">
        <input
          type="text"
          placeholder={t('placeholder_search_bar')}
          value={location}
          onChange={handleInputChange}
          className="flex-grow p-2 text-gray-700 placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSearchClick}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          {isSearching ? (
            <div className="spinner-border text-white w-5 h-5" role="status">
              <span className="sr-only">{t('loading_forecast')}...</span>
            </div>
          ) : (
            <SearchIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      <SuggestionsList suggestions={suggestions} onSelect={handleSuggestionClick} />
    </div>
  );
};

export default SearchBar;