import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import SearchAndFilter from './SearchAndFilter';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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

    return (
        <div className="product-list">
            <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />
            <div className="products">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
