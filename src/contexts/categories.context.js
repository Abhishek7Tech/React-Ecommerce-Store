import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shop-data.js"; 
export const CategoriesContext = createContext({
    products: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({});
    const value = {categoriesMap,setCategoriesMap};
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])
   getCategoriesAndDocuments();
    // setProducts(PRODUCTS_DATA);
    return <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
} 