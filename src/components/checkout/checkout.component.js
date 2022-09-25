import { useContext } from "react";
import { CartDropDownContext } from "../../contexts/cart-dropdown-context";
import CheckoutItem from "../checkout-item/checkout,component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, total } =
    useContext(CartDropDownContext);
  if (!cartItems) return;

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
      { cartItems.map((items) => {
        return (
         <CheckoutItem key ={items.id} cartItem = {items} />
        );
      })}
      </div>
      <span className="total" >Total: {total}$</span>
    </div>
  );
};

export default Checkout;