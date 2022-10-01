import { createSelector } from "reselect";

//1
const selectCategoryReducer = (state) => {
  return state.categories;
};

//2
export const selectCategories = createSelector(
  //previous state in cache
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categoriesMap;
  }
);

//3
export const categoriesSelctor = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, categories) => {
      const { title, items } = categories;
      acc[title.toLowerCase()] = items;
      return acc;
    }, []);
  }
);
