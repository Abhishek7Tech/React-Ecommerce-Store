import { Fragment} from "react";
import { useSelector } from "react-redux";
import { categoriesSelctor } from "../../../store/categories/categories.selector";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap =  useSelector(categoriesSelctor);
  return (
    <Fragment>
    {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key = {title} title = {title} products = {products} />
      })}
      </Fragment>
  );
};

export default CategoriesPreview;
