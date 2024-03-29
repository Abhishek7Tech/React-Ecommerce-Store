import { Route, Routes} from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories.component";
import Category from "../category/category.component";
import "./shop.styles.scss";
import { fetchCategoriesAsync, setCategoriesMap } from "../../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //     const categoryArray = await getCategoriesAndDocuments();
    //     dispatch(setCategoriesMap(categoryArray));
    //   }
    //  getCategoriesMap();
    dispatch(fetchCategoriesAsync());
    
},[])
  return (
    <Routes>
        <Route index element = {<CategoriesPreview/>} />
        <Route path=":category"  element = {<Category/>}/>
    </Routes>
  );
};

export default Shop;
