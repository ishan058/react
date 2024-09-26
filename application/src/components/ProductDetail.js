import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const { productId } = useParams();
    const products = useSelector((state) => state.products.items);
    const product = products.find((p) => p.id === Number(productId));

    if (!product) return <div>Product not found.</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;
