import { useContext } from "react";
import { CartDropDownContext } from "../../contexts/cart-dropdown-context";
import Button from "../button/button.component";
import "./products.styles.scss";

const Products = ({ product }) => {
  const {addItemToCart} = useContext(CartDropDownContext);
  console.log(product);
  
    const {id, name, imageUrl, price } = product;
    const addProductToCartHandler = () => addItemToCart(product);
    console.log(id,name, imageUrl, price);
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
