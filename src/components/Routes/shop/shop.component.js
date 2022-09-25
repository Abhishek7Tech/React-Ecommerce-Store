
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import Products from "../../products/products.component";
import "./shop.styles.scss";

const Shop = () => {
    const {products} = useContext(ProductsContext);
    console.log("PRODUCTS", products);
    return (
        <div className = "shop-container">
            <Products product = {products} />
        </div>
    )
} 

export default Shop;