"use client";

import React, { useState, useEffect } from 'react';
import SearchIcon from './components/SearchIcon';

const SearchBar = ({ onSelectLocation }) => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce function to prevent too many API calls
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestions = async (query) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      setIsSearching(true);
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en&format=json`);
      const data = await response.json();
      if (data.results) {
        const germanCities = data.results.filter(
          (city) => city.country_code === 'DE'
        );
        setSuggestions(germanCities);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Failed to fetch suggestions:', error);
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  };

  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  useEffect(() => {
    if (location) {
      debouncedFetchSuggestions(location);
    } else {
      setSuggestions([]);
    }
  }, [location]);

  const handleSuggestionClick = (suggestion) => {
    onSelectLocation({
      lat: suggestion.latitude,
      lon: suggestion.longitude,
      name: suggestion.name,
    });
    setLocation(suggestion.name);
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    if (suggestions.length > 0) {
      const firstSuggestion = suggestions[0];
      onSelectLocation({
        lat: firstSuggestion.latitude,
        lon: firstSuggestion.longitude,
        name: firstSuggestion.name,
      });
      setLocation(firstSuggestion.name);
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center p-2 pl-4 bg-white rounded-xl shadow-lg border border-gray-200">
        <input
          type="text"
          placeholder="Enter a German city (e.g., Hamburg)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-grow p-2 text-gray-700 placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSearchClick}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}>
              <button
                onClick={() => handleSuggestionClick(suggestion)}
                className="block w-full text-left p-4 hover:bg-gray-100 transition-colors duration-200"
              >
                {suggestion.name}, {suggestion.country_code}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;