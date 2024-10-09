import React from 'react';

const BestSeller = () => {
    const bestSellers = [
        { id: 1, name: "Snake Plant" },
        // Add more plants here
    ];

    return (
        <section className="best-seller">
            <h2>Here Are the Best Seller</h2>
            <div className="product-list">
                {bestSellers.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src="path/to/image" alt={product.name} />
                        <h3>{product.name}</h3>
                        <button className="buy-now">Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BestSeller;
