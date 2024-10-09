import React from 'react';

const Categories = () => {
    const categories = ["Indoor", "Outdoor", "Flowering", "Succulents", "Herbs"];

    return (
        <section className="categories">
            <h2>Plant Categories</h2>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <img src="path/to/image" alt={category} />
                        <h3>{category}</h3>
                        <button className="view-details">View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
