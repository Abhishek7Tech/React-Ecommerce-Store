
import { ReactComponent as CartIcons } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { newCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setDropDown } from "../../store/cart/cart.action";

const CartIcon = () => {
    const dispatch =useDispatch();
    const dropDown = useSelector(selectIsCartOpen);
   const cartCount = useSelector(newCartCount);
    const dropDownHandler = () => {
     dispatch(setDropDown(!dropDown));
   }

return (
        <div onClick={dropDownHandler} className = "cart-icon-container">
            <CartIcons className = "shopping-icon"/>
            <span className = "item-count"> {cartCount} </span>
        </div>
);
}

export default CartIcon;