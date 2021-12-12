import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0, totalItems: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let newItem = action.item;
    const updatedItems = [...state.items];
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === newItem.id;
    });

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: newItem.quantity + existingCartItem.quantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push(newItem);
    }
    const updatedTotalAmount =
      state.totalAmount + newItem.quantity * newItem.price;
    const updatedTotalItems = state.totalItems + newItem.quantity;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItems: updatedTotalItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      let updatedTotalAmount = state.totalAmount;
      let updatedTotalItems = state.totalItems;

      updatedTotalAmount =
        state.totalAmount - existingCartItem.price * existingCartItem.quantity;
      updatedTotalItems = state.totalItems - existingCartItem.quantity;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems,
      };
    }
  }

  if (action.type === "UPDATE_ITEM_QUANTITY") {
    const newItem = { ...action.item };
    const updatedItems = [...state.items];
    let updatedTotalAmount;
    let updatedTotalItems;

    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === newItem.id;
    });

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem.quantity > newItem.quantity) {
      updatedTotalAmount =
        state.totalAmount -
        existingCartItem.price * (existingCartItem.quantity - newItem.quantity);

      updatedTotalItems =
        state.totalItems - (existingCartItem.quantity - newItem.quantity);
    } else {
      updatedTotalAmount =
        state.totalAmount +
        existingCartItem.price * (newItem.quantity - existingCartItem.quantity);

      updatedTotalItems =
        state.totalItems + (newItem.quantity - existingCartItem.quantity);
    }

    updatedItems[existingCartItemIndex] = newItem;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItems: updatedTotalItems,
    };
  }
  return defaultCartState;
};

function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };
  const updateItemQuantityHandler = (item) => {
    dispatchCartAction({ type: "UPDATE_ITEM_QUANTITY", item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItems: cartState.totalItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    updateItemQuantity: updateItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
