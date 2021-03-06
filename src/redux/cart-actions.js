import CartTypes from "./cart-types";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});
