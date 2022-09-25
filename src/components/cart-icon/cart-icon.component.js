import { useContext } from "react";
import { CartDropDownContext} from "../../contexts/cart-dropdown-context";

import { ReactComponent as CartIcons } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
    const {dropDown, setDropDown} = useContext(CartDropDownContext)
     const {cartCount} = useContext(CartDropDownContext);
    const dropDownHandler = () => {
     console.log("Clicked");
     setDropDown(!dropDown);
   }
return (
        <div onClick={dropDownHandler} className = "cart-icon-container">
            <CartIcons className = "shopping-icon"/>
            <span className = "item-count"> {cartCount} </span>
        </div>
);
}

export default CartIcon;