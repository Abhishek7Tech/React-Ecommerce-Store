import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDropDown } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";


const CartDropDown = () => {
    const dispatch = useDispatch(); 
const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const gotToCHeckoutHandler = () => {
      navigate('/checkout');
      dispatch(setDropDown(false));
  }
    return(
        
        <div className="cart-dropdown-container">
            <div className = "cart-items" >
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick = {gotToCHeckoutHandler} >GO TO CHECKOUT</Button> 
        </div>
    );
}

export default CartDropDown;