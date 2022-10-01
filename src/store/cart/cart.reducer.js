import { CART_ACTION_TYPES } from "./cart.type";

export const CART_INITIAL_STATE = {
    dropDown: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS :
            return {
                ...state,
               cartItems:payload,
            };
        case CART_ACTION_TYPES.SET_DROPDOWN :
            return {
                ...state,
                dropDown:payload
            }    
        default : return state;    
    }
}