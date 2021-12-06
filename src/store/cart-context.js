import React from "react";

const CartContext = React.createContext({
  items: [],
  finalPrice: 0,
  numOfItems: 0,
  addItem: () => {},
  removeItem: () => {},
  updateItemQuantity: () => {},
});

export default CartContext;
