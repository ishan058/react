import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortOption, setSortOption] = useState('none');

    useEffect(() => {
        let sortedProducts = [...products];
        if (sortOption === 'price-low-high') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-high-low') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
    }, [sortOption, products]);

    return (
        <div className="product-list-container">
            <div className="product-filters">
                <select onChange={(e) => setSortOption(e.target.value)}>
                    <option value="none">Sort by</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                </select>
            </div>
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
