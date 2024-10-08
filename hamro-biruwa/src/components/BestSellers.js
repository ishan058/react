import React from 'react';
import '../styles/BestSellers.css';

const BestSellers = () => {
    const bestSellers = [
        { name: 'Snake plant', price: '$20' },
        { name: 'Succulent', price: '$12' },
        { name: 'Cactus', price: '$18' },
    ];

    return (
        <section className="best-sellers">
            <h2>Here Are the Best Sellers</h2>
            <div className="best-seller-list">
                {bestSellers.map((plant, index) => (
                    <div key={index} className="best-seller-card">
                        <img src={`/${plant.name.toLowerCase().replace(' ', '-')}.jpg`} alt={plant.name} />
                        <h3>{plant.name}</h3>
                        <p>{plant.price}</p>
                        <button>Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
