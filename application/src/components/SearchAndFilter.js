import React, { useState } from 'react';
import '../styles/SearchAndFilter.css';

const SearchAndFilter = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const [category, setCategory] = useState('all');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleFilterChange = (type, value) => {
        if (type === 'price') setPriceRange(value);
        if (type === 'category') setCategory(value);
        onFilter({ priceRange, category });
    };

    return (
        <div className="search-filter">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="search-input"
            />
            <select onChange={(e) => handleFilterChange('category', e.target.value)} value={category}>
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Kitchen</option>
            </select>
            <select onChange={(e) => handleFilterChange('price', e.target.value)} value={priceRange}>
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
            </select>
        </div>
    );
};

export default SearchAndFilter;
