import { CATEGORY_ACTION_TYPES } from "./categories.types";

export const CATEGORY_INITIAL_STATE = {
  categoriesMap: [],
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CURRENT_CATEGORY:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};
