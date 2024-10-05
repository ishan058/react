import React, { useState, useEffect } from 'react';
import { submitReview, fetchReviews } from '../utils/api';
import '../styles/ProductReview.css';

const ProductReview = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const loadReviews = async () => {
            const productReviews = await fetchReviews(productId);
            setReviews(productReviews);
        };
        loadReviews();
    }, [productId]);

    const handleReviewSubmit = async () => {
        await submitReview({ productId, review: newReview, rating });
        setNewReview('');
        setRating(0);
        const updatedReviews = await fetchReviews(productId);
        setReviews(updatedReviews);
    };

    return (
        <div className="reviews-container">
            <h3>Product Reviews</h3>
            <div className="review-form">
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review..."
                />
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="0">Select Rating</option>
                    {[1, 2, 3, 4, 5].map((r) => (
                        <option key={r} value={r}>
                            {r} Stars
                        </option>
                    ))}
                </select>
                <button onClick={handleReviewSubmit} className="submit-review-btn">
                    Submit
                </button>
            </div>
            <ul className="reviews-list">
                {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                        <strong>{review.user}</strong>
                        <span>Rating: {review.rating} / 5</span>
                        <p>{review.review}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductReview;
