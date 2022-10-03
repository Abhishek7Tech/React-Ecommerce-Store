import { Link } from "react-router-dom";
import Products from "../products/products.component";
import "./category-preview.styles.scss";
import { Spinner } from "../spinner/spinner.component";
import { useSelector } from "react-redux";
import { categoriesloadingSelector } from "../../store/categories/categories.selector";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(categoriesloadingSelector);
  return (
    <div className="category-preview-container">
      {}
      <h2>
        <Link className="title" to={title}>
          {title}
        </Link>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((products) => (
              <Products key={products.id} product={products} />
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPreview;
