import { useSelector } from "react-redux";
import { selectCartItems, totalHandler } from "../../store/cart/cart.selector";
import CheckoutItem from "../checkout-item/checkout,component";
import PaymentForm from "../payment-form/payment-form";
import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(totalHandler);
  console.log("CHECKOUT", cartItems, total);

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
      <PaymentForm />
    </div>
  );
};

export default Checkout;
