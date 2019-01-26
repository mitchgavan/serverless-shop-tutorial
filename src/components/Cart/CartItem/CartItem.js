import React from 'react';
import './CartItem.css';

export default ({ title, cost, quantity }) => (
  <div className="CartItem">
    <div>{title}</div>
    <div className="CartItem-details">
      <div className="CartItem-quantity">Qty: {quantity}</div>
      <div>${cost.toFixed(2)}</div>
    </div>
  </div>
);
