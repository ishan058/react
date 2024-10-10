import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { PlantContext } from '../contexts/PlantContext';
import '../styles/BestSellers.css';

const BestSellers = () => {
  const { bestSellers } = useContext(PlantContext);  // Ensure PlantContext provides 'bestSellers' state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="best-sellers">
      <h2>Here Are the Best Sellers</h2>
      <div className="product-grid">
        {bestSellers.map((product, index) => (
          <div key={index} className="product-card" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </section>
  );
};

export default BestSellers; // Ensure that BestSellers is exported as default
