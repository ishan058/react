import React, { useState, useEffect } from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = ({ product, recommendations }) => {
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews from API or state (simulated here)
        setReviews([
            { username: 'john_doe', comment: 'Great product!', rating: 5 },
            { username: 'jane_doe', comment: 'Not bad, but could be cheaper.', rating: 3 },
        ]);
    }, [product.id]);

    return (
        <div className="product-detail-container">
            <div className="image-gallery">
                <img className="main-image" src={mainImage} alt={product.name} />
                <div className="thumbnail-container">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <button className="add-to-cart">Add to Cart</button>
                <div className="reviews">
                    <h3>Customer Reviews</h3>
                    {reviews.length ? (
                        reviews.map((review, index) => (
                            <div key={index} className="review">
                                <strong>{review.username}</strong> ({review.rating} / 5): {review.comment}
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
                <div className="recommendations">
                    <h3>Recommended Products</h3>
                    <div className="recommended-products">
                        {recommendations.map((item) => (
                            <div key={item.id} className="recommended-item">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p className="price">${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
