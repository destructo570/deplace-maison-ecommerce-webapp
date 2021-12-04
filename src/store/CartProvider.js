import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  finalPrice: 0,
  numOfItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const productItem = action.data;
    console.log(productItem);
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.data.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + productItem.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(productItem);
    }

    const updatedFinalPrice =
      state.finalPrice + productItem.price * productItem.amount;

    const updatedNumOfItems = state.numOfItems + productItem.amount;

    return {
      items: updatedItems,
      finalPrice: updatedFinalPrice,
      numOfItems: updatedNumOfItems,
    };
  }

  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const updatedFinalPrice =
        state.finalPrice - existingCartItem.price * existingCartItem.amount;

      const updatedNumOfItems = state.numOfItems - existingCartItem.amount;

      return {
        items: updatedItems,
        finalPrice: updatedFinalPrice,
        numOfItems: updatedNumOfItems,
      };
    }
  }

  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      data: {
        id: item.id,
        name: item.name,
        color: item.color,
        img: item.img,
        price: item.price,
        size: item.size,
        type: item.type,
        amount: 1,
        discount: item.discount,
      },
    });
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
