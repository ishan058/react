// src/api.js

export const fetchProducts = async () => {
    // Replace with your actual API call to fetch products
    return [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
    ];
};

export const fetchUsers = async () => {
    // Replace with your actual API call to fetch users
    return [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', active: true, signupDate: '2024-01-01' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', active: false, signupDate: '2024-02-01' },
    ];
};

export const fetchOrders = async () => {
    // Replace with your actual API call to fetch orders
    return [
        { id: 1, userName: 'John Doe', total: 150, status: 'Completed', date: '2024-01-10' },
        { id: 2, userName: 'Jane Smith', total: 200, status: 'Pending', date: '2024-02-15' },
    ];
};
