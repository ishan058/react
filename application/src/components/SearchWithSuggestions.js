// src/components/SearchWithSuggestions.js
import React, { useState } from 'react';
import { fetchProductSuggestions } from '../utils/api';

const SearchWithSuggestions = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 2) {
            const results = await fetchProductSuggestions(value); // Use the correct function here
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search products..."
            />
            <ul>
                {suggestions.map((suggestion) => (
                    <li key={suggestion.id} onClick={() => onSearch(suggestion.name)}>
                        {suggestion.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchWithSuggestions;
