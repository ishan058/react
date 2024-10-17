// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);

    if (input.length > 2) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(input)
      );
      setSuggestions(filteredProducts);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for products..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
