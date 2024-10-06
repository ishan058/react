import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import SearchWithSuggestions from '../components/SearchWithSuggestions';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Set the number of products to display per page
    const [sortOption, setSortOption] = useState('default');

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
        setCurrentPage(1);
    };

    const handleSort = (event) => {
        const { value } = event.target;
        setSortOption(value);

        let sortedProducts = [...filteredProducts];
        if (value === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (value === 'name-asc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (value === 'name-desc') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        setFilteredProducts(sortedProducts);
    };

    // Calculate pagination variables
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

    const handleFilter = ({ priceRange, category, brand }) => {
        let results = products;
    
        // Apply category filter
        if (category !== 'all') {
            results = results.filter((product) => product.category === category);
        }
    
        // Apply price range filter
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            results = results.filter((product) => product.price >= min && product.price <= max);
        }
    
        // Apply brand filter
        if (brand !== 'all') {
            results = results.filter((product) => product.brand === brand);
        }
    
        setFilteredProducts(results);
    };
    
    return (
        <div className="product-list-container">
            <div className="product-list-controls">
                <SearchWithSuggestions onSearch={handleSearch} />
                <div className="sort-options">
                    <label htmlFor="sort">Sort By: </label>
                    <select id="sort" value={sortOption} onChange={handleSort}>
                        <option value="default">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
            </div>
            
            <div className="product-list">
                {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`page-btn ${index + 1 === currentPage ? 'active' : ''}`}
                        onClick={() => handlePagination(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
