import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../api';
import { setProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            dispatch(setProducts(data)); // Update Redux store
        };

        getProducts();
    }, [dispatch]);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
