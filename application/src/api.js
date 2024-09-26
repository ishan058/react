import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};
