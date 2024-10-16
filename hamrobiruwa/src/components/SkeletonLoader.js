// src/components/SkeletonLoader.js
import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => (
  <div className="skeleton-loader">
    <div className="skeleton-item"></div>
    <div className="skeleton-item"></div>
    <div className="skeleton-item"></div>
  </div>
);

export default SkeletonLoader;
