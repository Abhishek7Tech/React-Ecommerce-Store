import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropDownContext } from "../../contexts/cart-dropdown-context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";


const CartDropDown = () => {

  const {cartItems,setDropDown} =  useContext(CartDropDownContext);
  const navigate = useNavigate();
  
  const gotToCHeckoutHandler = () => {
      navigate('/checkout');
      setDropDown(false);
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