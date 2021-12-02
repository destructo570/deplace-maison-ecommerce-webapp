import { useReducer } from "react";
import CartContext from "./cart-context";
import { ProductItemList } from "../dummyData/ProductItemList";

const defaultCartState = {
  items: [],
  finalPrice: 0,
  numOfItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const productItem = ProductItemList.filter((item) => item.id === action.id);
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + productItem[0].amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(productItem[0]);
    }

    const updatedFinalPrice =
      state.finalPrice + productItem[0].price * productItem[0].amount;

    const updatedNumOfItems = state.numOfItems + productItem[0].amount;

    return {
      items: updatedItems,
      finalPrice: updatedFinalPrice,
      numOfItems: updatedNumOfItems,
    };
  }

  if (action.type === "REMOVE") {
    const productItem = ProductItemList.filter((item) => item.id === action.id);

    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedFinalPrice =
      state.finalPrice - productItem[0].price * existingCartItem.amount;

    const updatedNumOfItems = state.numOfItems - productItem[0].amount;

    return {
      items: updatedItems,
      finalPrice: updatedFinalPrice,
      numOfItems: updatedNumOfItems,
    };
  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (itemId) => {
    dispatchCartAction({ type: "ADD", id: itemId });
  };

  const removeItemHandler = (itemId) => {
    dispatchCartAction({ type: "REMOVE", id: itemId });
  };

  const cartContext = {
    items: cartState.items,
    finalPrice: cartState.finalPrice,
    numOfItems: cartState.numOfItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
