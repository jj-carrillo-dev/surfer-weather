
const SuggestionsList = ({ suggestions, onSelect }) => {
    if (suggestions.length === 0) {
        return null;
    }

    return (
        <ul className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200">
            {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                    <button
                        onClick={() => onSelect(suggestion)}
                        className="block w-full text-left p-4 hover:bg-gray-100 transition-colors duration-200"
                    >
                        {suggestion.name}, {suggestion.country_code}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SuggestionsList;