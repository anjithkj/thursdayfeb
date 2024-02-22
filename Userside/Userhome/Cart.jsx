import React, { useState } from 'react';
import Flexdraw from './Flexdraw';
import './cart.scss'
import Footer from '../Userfooter/Footer';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Function to calculate the total amount of all purchases
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const proceedToPayment = () => {
    // Code to proceed the user to the payment portal goes here
    alert('Redirecting to payment portal...');
  };

  return (
    <div className='midall'>
      <Flexdraw />
      <br />
      <h2 className='hd'>Cart</h2>
      <div className='cart-box'>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='total-amount'>
        Total Amount: ${calculateTotalAmount()}
      </div>
      <button className="proceed-button" onClick={proceedToPayment}>Proceed to Payment</button>
      <div className='homefooterbottom'></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;