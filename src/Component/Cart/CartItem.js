import classes from './Cartitem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
const CartItem = (props) => {
  const { names, quantity, total, price,id } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = ()=>{
    dispatch(cartActions.removeItemToCart(id))
  };

  const additemHandler = ()=>{
    dispatch(
      cartActions.addItemToCart({
        id,
        names,
        price,
      })
    );
  };
 

  return (
    <li className={classes.item}>
      <header>
        <h3>{names}</h3>
        <div className={classes.price}>
        ₹{total}{' '}
          <span className={classes.itemprice}>(₹{price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={additemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
