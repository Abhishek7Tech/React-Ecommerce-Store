import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.dropDown
);

export const selectCartItems = createSelector(
  [selectCartReducer],
(cart) =>  cart.cartItems
);

export const newCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const totalHandler = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItems) => total + cartItems.price * cartItems.quantity,
    0
  )
);
