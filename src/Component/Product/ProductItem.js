import React, { Fragment } from "react";
import classes from "./ProductItem.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';

function ProductItem(props) {
  const { names, price_details, images_links, id, stars } = props;
  var price = parseFloat(props.price);

  const dispatch = useDispatch();

  const addtoCartHandler = ()=>{
    dispatch(
      cartActions.addItemToCart({
        id,
        names,
        price,
      })
    );
  };

  const navigate = useNavigate();

  const detailsHandler = () => {
    const data = {
      id: props.id,
      names: props.names,
      price : props.price,
      price_details: props.price_details,
      images_links: props.images_links,
      stars: props.stars,
      memory:props.memory,
      camara_info:props.camara_info,
      display : props.display,
      battery :props.battery,
      processor :props.processor,
      warranty :props.processor,
      reviews : props.reviews
    };

    navigate('/product/shopnow', { state: { Data: data } });
  };

  return (
    <Fragment>
      <div key={id} className={classes.card}>
        <div className={classes.card_header}>
          <img src={images_links} alt={names} className={classes.card_image} />
        </div>
        <h3 className={classes.card_text}>{names}</h3>
        <p>
          <span>{stars}</span>
          <span>{<StarRateIcon fontSize="small" />}</span>
        </p>
        <div className={classes.price}>
          <p>₹{price}</p>
          <span>{price_details.slice(0, 8)}</span>
          {/* {"    "} */}
          <span>{price_details.slice(8, price_details.length)}</span>
        </div>
        <div className={classes.btn}>
          <button className={classes.custom_link} onClick={addtoCartHandler}>ADD TO CART</button>
          <button className={classes.custom_link} onClick={detailsHandler}>SHOP NOW</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductItem;
