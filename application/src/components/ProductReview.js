import React, { useState } from 'react';
import '../styles/ProductReview.css';

const ProductReview = () => {
    const [reviews, setReviews] = useState([
        { id: 1, user: 'Alice', comment: 'Great product!' },
        { id: 2, user: 'Bob', comment: 'Satisfactory' },
    ]);
    const [newReview, setNewReview] = useState('');

    const handleAddReview = () => {
        const newReviewObj = { id: reviews.length + 1, user: 'Guest', comment: newReview };
        setReviews([...reviews, newReviewObj]);
        setNewReview('');
    };

    return (
        <div className="review-container">
            <h3>Product Reviews</h3>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.user}:</strong> {review.comment}
                    </li>
                ))}
            </ul>
            <div className="review-input">
                <input
                    type="text"
                    placeholder="Add a review..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button onClick={handleAddReview}>Add Review</button>
            </div>
        </div>
    );
};

export default ProductReview;
