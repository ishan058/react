// src/components/SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesChart = ({ salesData }) => {
  const chartData = {
    labels: salesData.map(data => data.date),
    datasets: [
      {
        label: 'Sales Over Time',
        data: salesData.map(data => data.amount),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="sales-chart">
      <h3>Sales Performance</h3>
      <Line data={chartData} />
    </div>
  );
};

export default SalesChart;
