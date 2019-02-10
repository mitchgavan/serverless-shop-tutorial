import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import './CheckoutForm.css';

class CheckoutForm extends Component {
  submit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  render() {
    return (
      <form className="CheckoutForm" onSubmit={this.submit}>
        <h4>Would you like to complete the purchase?</h4>
        <CardElement />
        <button className="CheckoutForm-button" type="submit">
          Submit Order
        </button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
