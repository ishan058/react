// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions'; // Action to add product to cart
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === parseInt(productId));
        if (foundProduct) {
            setProduct(foundProduct);
            setLoading(false);
        } else {
            setError('Product not found');
            setLoading(false);
        }
    }, [productId, products]);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert('Product added to cart!');
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (rating === "0" || reviewText.trim() === "") {
            alert("Please provide a rating and a review text.");
            return;
        }
        setReviews([...reviews, { rating, text: reviewText }]);
        setReviewText('');
        setRating(0);
    };

    const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id);

    if (loading) {
        return <div className="loader">Loading...</div>; // Loading spinner or text
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            
            <div className="product-reviews">
                <h2>Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p>Rating: {review.rating}</p>
                            <p>{review.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
                
                <form onSubmit={handleReviewSubmit} className="review-form">
                    <label>
                        Rating:
                        <select value={rating} onChange={handleRatingChange}>
                            <option value="0">Select...</option>
                            {[1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Review:
                        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    </label>
                    <button type="submit">Submit Review</button>
                </form>
            </div>

            <div className="related-products">
                <h2>Related Products</h2>
                <div className="related-product-list">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((related) => (
                            <div key={related.id} className="related-product">
                                <h3>{related.name}</h3>
                                <img src={related.imageUrl} alt={related.name} />
                                <p>Price: ${related.price}</p>
                                <button onClick={() => dispatch(addToCart(related))}>Add to Cart</button>
                            </div>
                        ))
                    ) : (
                        <p>No related products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
