import { useState, useEffect, useCallback } from 'react';

// Define the interface for a suggestion object from the API
interface ILocationSuggestion {
    name: string;
    latitude: number;
    longitude: number;
    country_code: string;
}

const useSearchController = (onSelectLocation: (location: { lat: number; lon: number; name: string }) => void) => {
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState<ILocationSuggestion[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    // Debounce function to prevent excessive API calls
    const debounce = (func: (...args: any[]) => void, delay: number) => {
        let timeout: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    const fetchSuggestions = async (query: string) => {
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
                    (city: ILocationSuggestion) => city.country_code === 'DE'
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

    // Memoize the debounced function to avoid re-creation on every render
    const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);

    useEffect(() => {
        if (isTyping && location) {
            debouncedFetchSuggestions(location);
        } else if (!location) {
            setSuggestions([]);
        }
    }, [location, isTyping, debouncedFetchSuggestions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsTyping(true);
        setLocation(e.target.value);
    };

    const handleSuggestionClick = (suggestion: ILocationSuggestion) => {
        setIsTyping(false);
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
            setIsTyping(false);
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

    return {
        location,
        suggestions,
        isSearching,
        handleInputChange,
        handleSuggestionClick,
        handleSearchClick,
    };
};

export default useSearchController;