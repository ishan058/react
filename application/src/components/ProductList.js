import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api'; // Import the fetch function for product data
import SearchAndFilter from './SearchAndFilter'; // Filter and basic search component
import ProductCard from './ProductCard'; // Component for displaying individual product cards
import SearchWithSuggestions from '../components/SearchWithSuggestions'; // Enhanced search component
import '../styles/ProductList.css'; // Custom styles for product list

const ProductList = () => {
    const [products, setProducts] = useState([]); // Full list of products fetched from API
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered list for display

    // Fetch products on component mount
    useEffect(() => {
        const loadProducts = async () => {
            const productData = await fetchProducts(); // Fetch product data from API
            setProducts(productData);
            setFilteredProducts(productData);
        };
        loadProducts();
    }, []);

    // Handle search using the search term entered by the user
    const handleSearch = (searchTerm) => {
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    };

    // Handle filter based on price range and category selected by the user
    const handleFilter = ({ priceRange, category }) => {
        let results = products;

        // Apply category filter
        if (category && category !== 'all') {
            results = results.filter((product) => product.category === category);
        }

        // Apply price range filter
        if (priceRange && priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            results = results.filter((product) => product.price >= min && product.price <= max);
        }

        setFilteredProducts(results); // Update the filtered products state
    };

    return (
        <div className="product-list">
            <h1>Product List</h1>

            {/* Insert the SearchWithSuggestions Component */}
            <SearchWithSuggestions onSearch={handleSearch} />

            {/* Additional Search and Filter Component for Advanced Filtering */}
            <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

            {/* Display the Product Cards */}
            <div className="products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found matching the criteria.</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
