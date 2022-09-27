import { Link } from "react-router-dom";
import CategoryItem from "../category-main/category-item.component";
import Products from "../products/products.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to = {title}>{title}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((products) => (
            <Products key={products.id} product={products} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
