import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/firebase/reducer.utils"
import { CATEGORY_ACTION_TYPES } from "./categories.types"

export const setCategoriesMap = (categoryMap) => createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY, categoryMap);
// const type = CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY;
// export const setCategoriesMap = (categoryMap) => () => ({type,categoryMap});
export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoryMap) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoryMap);

export const fetchCategoriesFailed = (categoryMap) => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED, categoryMap);

//THUNK FUNCTION ASYNC AWAIT..//
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try{
        const categoriesArray = await getCategoriesAndDocuments()
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}