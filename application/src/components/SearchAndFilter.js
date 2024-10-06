import React, { useState } from 'react';
import '../styles/SearchAndFilter.css';

const SearchAndFilter = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const [category, setCategory] = useState('all');
    const [brand, setBrand] = useState('all');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleFilterChange = () => {
        onFilter({ priceRange, category, brand });
    };

    return (
        <div className="search-filter-container">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
            
            <div className="filter-options">
                <label>Category: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                </select>

                <label>Price: </label>
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                </select>

                <label>Brand: </label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="all">All</option>
                    <option value="brand-a">Brand A</option>
                    <option value="brand-b">Brand B</option>
                    <option value="brand-c">Brand C</option>
                </select>
            </div>
            <button onClick={handleFilterChange} className="filter-button">
                Apply Filters
            </button>
        </div>
    );
};

export default SearchAndFilter;
