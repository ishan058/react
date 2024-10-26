import React from 'react';

const ProductTable = ({ products }) => (
  <div>
    <h3>Products</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              {/* Action buttons for editing or deleting */}
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
