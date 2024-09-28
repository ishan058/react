import React, { useState } from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.images[0]);

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
            </div>
        </div>
    );
};

export default ProductDetail;
