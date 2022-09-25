import { createContext, useEffect, useState } from "react";

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
});

export const CartDropDownProvider = ({ children }) => {
  const [dropDown, setDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);


  
  useEffect(() => {
    
    const totalHandler = cartItems.reduce(
      (total, cartItems) => total + (cartItems.price * cartItems.quantity),0
    )

    setTotal(totalHandler);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };


  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  };
  const values = {
    dropDown,
    setDropDown,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCount,
    clearItemFromCart,
    total
  };
  return (
    <CartDropDownContext.Provider value={values}>
      {children}
    </CartDropDownContext.Provider>
  );
};
