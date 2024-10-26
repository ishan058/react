// src/components/AnalyticsDashboard.js

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const AnalyticsDashboard = ({ salesData, userDemographics }) => {
  const salesChartData = {
    labels: salesData.map((item) => item.category),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map((item) => item.sales),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const demographicsData = {
    labels: userDemographics.map((item) => item.ageGroup),
    datasets: [
      {
        label: 'Users',
        data: userDemographics.map((item) => item.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="analytics-dashboard">
      <h2>Analytics</h2>
      <div className="chart">
        <Bar data={salesChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="chart">
        <Pie data={demographicsData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
