// src/components/ProductList.js
import React from 'react';
import '../styles/ProductList.css'; // Import your CSS for styling

const ProductList = ({ products, deleteProduct }) => {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products added yet.</p>
            ) : (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            <img src={product.image} alt={product.name} width="50" height="50" />
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>{product.description}</p>
                            <button onClick={() => deleteProduct(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
