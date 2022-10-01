import { createAction } from "../../utils/firebase/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.type";

export const setDropDown = (bool) => createAction(CART_ACTION_TYPES.SET_DROPDOWN, bool);


const addCartItem = (cartItems, productToAdd) => {
   
    const exsistingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    if (exsistingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  


const removeCartItem = (cartItems, productToRemove) => {
  
    const exsistingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );

    if (exsistingCartItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== productToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  


const clearCartItem = (cartItems, clearItem) => {
    const exsistingCartItem = cartItems.find(
      (cartItem) => cartItem.id === clearItem.id
    );
  
    if (exsistingCartItem.id) {
      return cartItems.filter((cartItem) => cartItem.id !== clearItem.id);
    }
  };
  


export const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
export  const removeItemFromCart = (cartItems,productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
export  const clearItemFromCart = (cartItems,productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  