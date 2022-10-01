
import { createAction } from "../../utils/firebase/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

// export const setCurrentUser = (user) => {
//     const type = USER_ACTION_TYPES.SET_CURRENT_USER;
//  return ({type, user});
// }

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)