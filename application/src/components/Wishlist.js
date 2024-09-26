// src/components/Wishlist.js
import React from 'react';
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist); // Get wishlist from Redux state

    return (
        <div>
            <h2>Your Wishlist</h2>
            <ul>
                {wishlist.length === 0 ? (
                    <li>Your wishlist is empty.</li> // Message if no items in wishlist
                ) : (
                    wishlist.map(item => ( // Map through wishlist items and display them
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Wishlist;
