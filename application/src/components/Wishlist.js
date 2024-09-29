import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Wishlist.css';

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
    return (
        <div className="wishlist-container">
            <h2>My Wishlist</h2>
            {wishlistItems.length ? (
                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p className="price">${item.price}</p>
                            <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">
                                Remove
                            </button>
                            <Link to={`/product/${item.id}`} className="view-btn">View Product</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your wishlist is empty!</p>
            )}
        </div>
    );
};

export default Wishlist;
