import { useReducer } from "react";
import { CartItemsList } from "../dummyData/CartItemsList";
import CartContext from "./cart-context";

const defaultCartState = {
  items: CartItemsList,
  totalAmount: 92,
};

const cartReducer = (state, action) => {
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
