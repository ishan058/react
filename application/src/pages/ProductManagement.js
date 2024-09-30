// src/pages/ProductManagement.js
import React, { useState } from 'react';
import '../styles/Admin.css';

const ProductManagement = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', price: '$10', category: 'Category 1' },
        { id: 2, name: 'Product B', price: '$20', category: 'Category 2' },
    ]);

    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="product-management">
            <h2>Product Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <button>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagement;
