import React, { useState } from 'react';
import classes from './Checkoutform.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import { NavLink } from 'react-router-dom';

const CheckoutForm = () => {
    const[submit ,setisSubmit] = useState(false);
    const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    address: '',
    cardnumber: '',
    expiry: '',
    cvv: '',
    product: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart()); // Dispatch the clearCart action
};

  
  const submitOrderhandler = async () => {
    setisSubmit(true);
    try {
      // Extracting only the form data, excluding cart-related information
      const { fullname, email, address, cardnumber, expiry, cvv, product, quantity } = formData;

      await fetch("https://food-dc6fe-default-rtdb.firebaseio.com/checkout.json", {
        method: "POST",
        body: JSON.stringify({
          user: {
            fullname,
            email,
            address,
          },
          product: {
            name: product,
            quantity: quantity,
          },
          payment: {
            cardnumber,
            expiry,
            cvv,
          },
        }),
      });
      clearCartHandler();

    } catch (error) {
      console.error("Error submitting order:", error);
      // Handle the error (e.g., show a user-friendly error message)
    }
  };

  return (
    <div className={classes.body}>
     {!submit &&  <div><h2>Checkout Form</h2>

      <form onSubmit={submitOrderhandler} className={classes.data}>
        {/* Customer Information */}
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        {/* Payment Information */}
        <h3>Payment Information</h3>

        <label htmlFor="cardnumber">Card Number:</label>
        <input
          type="text"
          id="cardnumber"
          name="cardnumber"
          value={formData.cardnumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="expiry">Expiry Date:</label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          placeholder="MM/YY"
          value={formData.expiry}
          onChange={handleChange}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          required
        />

        {/* Product Information */}
        <h3>Product Information</h3>

        <label htmlFor="product">Product Name:</label>
        <input
          type="text"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit" onClick={clearCartHandler}>Place Order</button>
      </form> </div>}
      { submit && (<div className={classes.placed}>
     <h1> your Order placed successfully</h1>
     <NavLink to="/home"><button>Back</button></NavLink>
    </div>)}
    </div>
  );
};

export default CheckoutForm;
