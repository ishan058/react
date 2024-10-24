import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              {/* Add your action buttons like Edit, Delete */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
