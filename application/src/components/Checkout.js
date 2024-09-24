import React, { useContext, useState } from 'react';  // Add useState
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { totalPrice, applyCoupon } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleCoupon = async () => {
    const response = await fetch(`/api/coupons/${couponCode}`);
    const data = await response.json();
    if (data.valid) {
      setDiscount(data.discount);
      applyCoupon(data.discount);
    } else {
      alert('Invalid coupon');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Coupon Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button onClick={handleCoupon}>Apply Coupon</button>
      <h2>Total after discount: ${(totalPrice * (1 - discount / 100)).toFixed(2)}</h2>
    </div>
  );
};

export default Checkout;
