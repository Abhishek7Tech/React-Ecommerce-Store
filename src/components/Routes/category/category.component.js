import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  categoriesloadingSelector,
  categoriesSelctor,
} from "../../../store/categories/categories.selector";
import Products from "../../products/products.component";
import { Spinner } from "../../spinner/spinner.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelctor);
  const isLoading = useSelector(categoriesloadingSelector);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};
export default Category;
