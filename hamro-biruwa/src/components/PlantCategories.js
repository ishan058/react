import React from 'react';
import '../styles/PlantCategories.css';

const PlantCategories = () => {
    const plants = [
        { name: 'Snake plant', price: '$20' },
        { name: 'Sunflower', price: '$15' },
        { name: 'Fiddle leaf fig', price: '$25' },
        // Add more plants as needed
    ];

    return (
        <section className="categories">
            <h2>Plant Categories</h2>
            <div className="plant-list">
                {plants.map((plant, index) => (
                    <div key={index} className="plant-card">
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

export default PlantCategories;
