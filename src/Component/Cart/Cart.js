import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from "react-router-dom";


const Cart = (props) => {
  const cartitems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <>
      <div className={classes.space}>
      </div>
      {cartQuantity === 0 && 
      <div className={classes.empty}>

       { <ShoppingCartOutlinedIcon fontSize="large" className={classes.shopicon}/> }<hr width="25%"/>
      <h2> Your Cart is Empty</h2>
      <NavLink to="/product"><h3>Continue Shopping</h3></NavLink>
      </div>}
     {cartQuantity !== 0 &&<Card className={classes.cart}>
      
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map((item) => (
          <CartItem
           key = {item.id}
            item={{
              id :item.id,
              names: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>}
    </>
  );
};

export default Cart;
