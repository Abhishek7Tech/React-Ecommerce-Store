import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart,addItemToCart,clearItemFromCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import "./checkout.styles.scss";

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  
  const cartItems = useSelector(selectCartItems);
    const addItemToCarts = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemFromCarts = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemFromCarts = () => dispatch(clearItemFromCart(cartItems, cartItem));


  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">
        <div className="arrow" onClick={ removeItemFromCarts}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={ addItemToCarts}>
          &#10095;
        </div>
      </span>

      <div
        className="remove-button"
        onClick={ clearItemFromCarts}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
