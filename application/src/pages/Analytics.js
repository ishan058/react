// src/pages/Analytics.js
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { fetchAnalyticsData } from '../api'; // Assume you have an API to fetch analytics
import '../styles/Analytics.css';

const Analytics = () => {
    const [chartData, setChartData] = useState({ series: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAnalyticsData = async () => {
            const data = await fetchAnalyticsData(); // Fetch analytics data
            setChartData(data);
            setLoading(false);
        };
        getAnalyticsData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="analytics">
            <h2>Analytics Overview</h2>
            <Chart
                options={{
                    chart: {
                        id: 'analytics-chart',
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    },
                }}
                series={chartData.series}
                type="bar"
                height="300"
            />
        </div>
    );
};

export default Analytics;
