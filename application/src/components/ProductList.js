import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import SearchAndFilter from './SearchAndFilter';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('price-asc');

    useEffect(() => {
        const loadProducts = async () => {
            const productData = await fetchProducts();
            setProducts(productData);
            setFilteredProducts(productData);
        };
        loadProducts();
    }, []);

    const handleSearch = (searchTerm) => {
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    };

    const handleFilter = ({ priceRange, category }) => {
        let results = products;
        if (category !== 'all') {
            results = results.filter((product) => product.category === category);
        }
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            results = results.filter((product) => product.price >= min && product.price <= max);
        }
        setFilteredProducts(results);
    };

    // Sorting handler
    const handleSort = (criteria) => {
        let sortedProducts = [...filteredProducts];
        if (criteria === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (criteria === 'name-asc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
        setFilteredProducts(sortedProducts);
    };

    useEffect(() => {
        handleSort(sortCriteria);
    }, [sortCriteria]);

    return (
        <div className="product-list">
            <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
            <div className="sort-options">
                <label>Sort by: </label>
                <select onChange={(e) => setSortCriteria(e.target.value)} value={sortCriteria}>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A-Z</option>
                </select>
            </div>
            <div className="products">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
