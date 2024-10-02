// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api'; // Assuming you have this API call
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10; // Adjust based on your requirements

    useEffect(() => {
        const getProducts = async () => {
            const productsData = await fetchProducts();
            setProducts(productsData);
            setLoading(false);
        };
        getProducts();
    }, []);

    if (loading) return <p>Loading...</p>;

    const totalPages = Math.ceil(products.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                {currentProducts.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
