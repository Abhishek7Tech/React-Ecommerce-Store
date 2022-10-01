import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartDropDownContext } from "../../contexts/cart-dropdown-context";
import { addItemToCart } from "../../store/cart/cart.action";
import { newCartCount, selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import "./products.styles.scss";

const Products = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
    const {id, name, imageUrl, price } = product;
    const addProductToCartHandler = () => dispatch(addItemToCart(cartItems,product));

    return (
      <div key={id} className="product-card-container">
        <img src={imageUrl} alt={name}></img>
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick = {addProductToCartHandler}>Add to cart</Button>
      </div>
    );
};

export default Products;
