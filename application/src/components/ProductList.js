// src/components/ProductList.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../actions/wishlistActions'; // Import the action

const ProductList = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product)); // Dispatch the action to add to wishlist
    };

    return (
        <div>
            <h1>Product List</h1>
            <input 
                type="text" 
                placeholder="Search products..." 
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button> {/* Add button */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
