import React, { Fragment } from 'react'
import classes from './Shopnow.module.css';
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';


function Shopnow() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state && location.state.Data;
  const backHandler = () => {
    navigate(-1);
  };
  var price = parseFloat(data.price);

  const dispatch = useDispatch();

  const addtoCartHandler = ()=>{
    dispatch(
      cartActions.addItemToCart({
        id : data.id,
        names : data.names,
        price : price,
      })
    );
  };


  return (
    <Fragment>
        <div className ={classes.head}>
          <p><span>Phones and Wearables </span> {'  >  ' }<span>Mobile phones</span>{'  >  ' }<span>{data.names.slice(0,7)}</span> </p>
        </div>
        <div className={classes.card}>
      <div className={classes.image_button}>
        <div className={classes.image}>
          <img src={data.images_links} alt="Loading.." />
        </div>
        <div className={classes.btn}>
          <div className={classes.btn1}>
            <button onClick={backHandler}>BACK</button>
          </div>

          <div className={classes.btn2}>
            <button onClick={addtoCartHandler}>Add To Cart</button>
          </div>
        </div>
      </div>

      <div className={classes.details}>
        <div className={classes.name}>
          <h3>{data.names}</h3>
        </div>
        <div className={classes.ratings}>
          <p className={classes.rat}>{data.stars}★</p>
          <p className={classes.reviews}>{data.reviews}</p>
        </div>
        <div className={classes.price}>
          <h2>₹{price}.00</h2>{ ' '}
          <h2>{data.price_details.slice(0,7)}</h2>
          <h2>{data.price_details.slice(7)}</h2>
        </div>
        <div className={classes.features}>
          <ul>
            <p><b>Key Features :</b></p>
            <li>Display : {data.display}</li>
            <li>Memory : {data.memory}</li>
            <li>Processor : {data.processor}</li>
            <li>Camera : {data.camara_info}</li>
            <li>Battery : {data.battery}</li>
            <li>Warranty : {data.warranty}</li>
          </ul>
        </div>
        <div className={classes.offers}>
          <ul >
          <h3>Available offers :- </h3>
            <li>
          Bank Offer : Instant discount Rs.4000 & from 9 months tenure Low-cost EMI on HDFC Bank Credit Card
          </li>
          <li>
            Bank Offer : Instant discount Rs.4000 & for 6 months no-cost EMI on HDFC Bank Credit Card.
            </li>
          <li>
            Bank Offer : Instant discount Rs.4000 on HDFC Bank credit card.
            </li>
          <li>
            Special PriceGet extra 36% off (price inclusive of cashback/coupon)
            </li>
            </ul>
        </div>
      </div>
    </div>

    </Fragment>
  )
}

export default Shopnow;