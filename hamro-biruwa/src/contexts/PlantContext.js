import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));

    axios.get('http://localhost:5000/api/bestsellers')
      .then(response => setBestSellers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <PlantContext.Provider value={{ categories, bestSellers }}>
      {children}
    </PlantContext.Provider>
  );
};
