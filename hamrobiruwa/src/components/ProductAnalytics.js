// src/components/ProductAnalytics.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const ProductAnalytics = ({ productData }) => {
  const data = {
    labels: productData.map((data) => data.date),
    datasets: [
      {
        label: 'Views',
        data: productData.map((data) => data.views),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Sales',
        data: productData.map((data) => data.sales),
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="product-analytics">
      <h2>Product Analytics</h2>
      <Line data={data} />
    </div>
  );
};

export default ProductAnalytics;
