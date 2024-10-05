import React, { useState, useEffect } from 'react';
import '../styles/SearchWithSuggestions.css';
import { fetchProductSuggestions } from '../utils/api';

const SearchWithSuggestions = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 2) {
            const loadSuggestions = async () => {
                const results = await fetchProductSuggestions(searchTerm);
                setSuggestions(results);
            };
            loadSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [searchTerm]);

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.name);
        setSuggestions([]);
        onSearch(suggestion.name);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="search-input"
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((item) => (
                        <li key={item.id} onClick={() => handleSuggestionClick(item)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchWithSuggestions;
