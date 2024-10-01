// src/components/ProductForm.js
import React, { useState } from 'react';
import '../styles/ProductForm.css'; // Import your CSS for styling

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price || !description || !image) {
            setError('All fields are required.');
            return;
        }
        
        const newProduct = {
            name,
            price,
            description,
            image: URL.createObjectURL(image), // Create a URL for the uploaded image
        };

        addProduct(newProduct);
        clearFields();
    };

    const clearFields = () => {
        setName('');
        setPrice('');
        setDescription('');
        setImage(null);
        setError('');
    };

    return (
        <div className="product-form-container">
            <h2>Add New Product</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
