import React from 'react';
import '../styles/Wishlist.css';

const Wishlist = () => {
    const wishlistItems = [
        { id: 1, name: 'Product 1', price: 200 },
        { id: 2, name: 'Product 2', price: 150 },
    ];

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>No items in your wishlist.</p>
            ) : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
