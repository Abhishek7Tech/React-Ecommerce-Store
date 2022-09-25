import { useContext } from "react";
import { CartDropDownContext } from "../../contexts/cart-dropdown-context";
import "./checkout.styles.scss";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartDropDownContext);
    return (
        <div className="checkout-item-container">
            <div className = "image-container">
                <img src={imageUrl} alt = {`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItemFromCart(cartItem)}>&#10094;</div>
               <span className="value"> {quantity} </span>
               <div className="arrow" onClick={()=>addItemToCart(cartItem)}>&#10095;</div>

                </span>
                
            <div className="remove-button" onClick = {() => clearItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}

export default CheckoutItem;