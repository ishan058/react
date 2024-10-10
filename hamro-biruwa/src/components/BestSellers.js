import React, { useState, useContext } from 'react';
import Modal from './Modal';
import { PlantContext } from '../contexts/PlantContext';
import '../styles/BestSellers.css';

const BestSellers = () => {
  const { bestSellers } = useContext(PlantContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = bestSellers.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="best-sellers">
      <h2>Best Sellers</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
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

export default BestSellers;
