import React, { useState } from 'react';

const AdminDashboard = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleAddProduct = () => {
        // Implement add product logic (e.g., API call)
        console.log('Added Product:', { name: productName, price: productPrice });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Product Price:</label>
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AdminDashboard;
