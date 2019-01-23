import React from 'react';
import './Product.css';

export default ({ price, title }) => (
  <div className="Product">
    <h2 className="Product-title">{title}</h2>
    <div className="Product-price">${price}</div>
    <div className="Product-buy-button">Add to cart</div>
  </div>
);
