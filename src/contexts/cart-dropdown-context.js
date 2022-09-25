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

export const CartDropDownContext = createContext({
  dropDown: false,
  setDropDown: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartCouht: 0
});

export const CartDropDownProvider = ({ children }) => {
  const [dropDown, setDropDown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
    setCartCount(newCartCount);
  },[cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const values = { dropDown, setDropDown, cartItems, addItemToCart, cartCount };
  return (
    <CartDropDownContext.Provider value={values}>
      {children}
    </CartDropDownContext.Provider>
  );
};
