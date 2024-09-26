import React from 'react';

const Filter = ({ onFilter }) => {
  const handleFilter = (e) => {
    const { name, value } = e.target;
    onFilter(name, value);
  };

  return (
    <div className="filter-container">
      <label>Filter by Price</label>
      <select name="price" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="low">Below $50</option>
        <option value="medium">$50 - $100</option>
        <option value="high">Above $100</option>
      </select>
    </div>
  );
};

export default Filter;
