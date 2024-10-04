import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fetchWishlist, removeFromWishlist } from '../utils/api';
import { Link } from 'react-router-dom';
import '../styles/Wishlist.css';

const Wishlist = () => {
    const { currentUser } = useAuth();
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (currentUser) {
            const loadWishlist = async () => {
                const items = await fetchWishlist(currentUser.id);
                setWishlist(items);
            };
            loadWishlist();
        }
    }, [currentUser]);

    const handleRemove = async (productId) => {
        await removeFromWishlist(productId);
        setWishlist(wishlist.filter(item => item.id !== productId));
    };

    return (
        <div className="wishlist">
            <h1>My Wishlist</h1>
            {wishlist.length > 0 ? (
                <ul>
                    {wishlist.map((item) => (
                        <li key={item.id} className="wishlist-item">
                            <Link to={`/product/${item.id}`}>
                                <img src={item.imageUrl} alt={item.name} />
                                <p>{item.name}</p>
                            </Link>
                            <button onClick={() => handleRemove(item.id)} className="remove-btn">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;
