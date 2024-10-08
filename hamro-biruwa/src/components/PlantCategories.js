import React, { useState, useEffect } from 'react';
import '../styles/PlantCategories.css';

const PlantCategories = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        // Simulating API call with a delay
        setTimeout(() => {
            setPlants([
                { id: 1, name: 'Snake Plant', price: '$20' },
                { id: 2, name: 'Sunflower', price: '$15' },
                { id: 3, name: 'Fiddle Leaf Fig', price: '$25' },
                // Add more plants dynamically
            ]);
        }, 1000);
    }, []);

    return (
        <section className="categories">
            <h2>Plant Categories</h2>
            <div className="plant-list">
                {plants.length === 0 ? (
                    <p>Loading plants...</p>
                ) : (
                    plants.map((plant) => (
                        <div key={plant.id} className="plant-card">
                            <img src={`/${plant.name.toLowerCase().replace(' ', '-')}.jpg`} alt={plant.name} />
                            <h3>{plant.name}</h3>
                            <p>{plant.price}</p>
                            <button>Buy Now</button>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default PlantCategories;
