import React, { useState, useEffect } from 'react';
import { fetchProductSuggestions } from '../utils/api';
import '../styles/SearchWithSuggestions.css';

const SearchWithSuggestions = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const loadSuggestions = async () => {
            if (searchTerm) {
                const suggestionData = await fetchProductSuggestions(searchTerm);
                setSuggestions(suggestionData);
            } else {
                setSuggestions([]);
            }
        };
        loadSuggestions();
    }, [searchTerm]);

    return (
        <div className="search-with-suggestions">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
            />
            <button onClick={() => onSearch(searchTerm)}>Search</button>
            {suggestions.length > 0 && (
                <ul className="suggestion-list">
                    {suggestions.map((item) => (
                        <li key={item.id} onClick={() => onSearch(item.name)}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchWithSuggestions;
