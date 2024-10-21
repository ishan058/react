// src/components/ProductForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      stock: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Product name must be at least 3 characters long')
        .required('Product name is required'),
      price: Yup.number()
        .min(1, 'Price must be greater than 0')
        .required('Price is required'),
      stock: Yup.number()
        .min(0, 'Stock cannot be negative')
        .required('Stock is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          name="stock"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.stock}
        />
        {formik.touched.stock && formik.errors.stock ? (
          <div>{formik.errors.stock}</div>
        ) : null}
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
