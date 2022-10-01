import { createContext, useReducer} from "react";

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

export const CartDropDownContext = createContext({
  dropDown: false,
  setDropDown: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartCount: 0,
  clearItem: () => {},
  total: 0,
});

export const INITIAL_STATE = {
  dropDown: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
      case "SET_DROPDOWN":
        return{
          ...state,
          dropDown:payload
        }
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartDropDownProvider = ({ children }) => {
 
  const [{cartItems,dropDown,cartCount,total}, dispatch] = useReducer(cartReducer,INITIAL_STATE);

  const updateCartItemReducer = (newCartItems) => {

    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const totalHandler = newCartItems.reduce(
      (total, cartItems) => total + cartItems.price * cartItems.quantity,
      0
    );

      dispatch({type:'SET_CART_ITEMS', payload: {cartItems: newCartItems, cartCount: newCartCount, total: totalHandler}})
    };
    
    const addItemToCart = (productToAdd) => {
      const newCartItems = addCartItem(cartItems, productToAdd);
      updateCartItemReducer(newCartItems);
    };
    
    const removeItemFromCart = (productToRemove) => {
      const newCartItems = removeCartItem(cartItems, productToRemove);
      updateCartItemReducer(newCartItems);
    };
    
    const clearItemFromCart = (productToRemove) => {
      const newCartItems = clearCartItem(cartItems, productToRemove);
      updateCartItemReducer(newCartItems);
    };
    
    const setDropDown = (bool) => {
    dispatch({type:'SET_DROPDOWN', payload: bool})

  }

  const values = {
    dropDown,
    setDropDown,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCount,
    clearItemFromCart,
    total,
  };
  return (
    <CartDropDownContext.Provider value={values}>
      {children}
    </CartDropDownContext.Provider>
  );
};
