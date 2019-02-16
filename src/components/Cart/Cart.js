import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.css';

export default function Cart({ itemsInCart }) {
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length ? (
        <div>
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: $
            {itemsInCart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}
