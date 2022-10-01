import { createAction } from "../../utils/firebase/reducer.utils"
import { CATEGORY_ACTION_TYPES } from "./categories.types"

export const setCategoriesMap = (categoryMap) => createAction(CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY, categoryMap);
// const type = CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY;
// export const setCategoriesMap = (categoryMap) => () => ({type,categoryMap});
