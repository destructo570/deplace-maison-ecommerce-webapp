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
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.data.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + productItem.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(productItem);
    }

    const updatedFinalPrice =
      state.finalPrice + productItem.price * productItem.quantity;

    const updatedNumOfItems = state.numOfItems + productItem.quantity;

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
        state.finalPrice - existingCartItem.price * existingCartItem.quantity;

      const updatedNumOfItems = state.numOfItems - existingCartItem.quantity;

      return {
        items: updatedItems,
        finalPrice: updatedFinalPrice,
        numOfItems: updatedNumOfItems,
      };
    }
  }

  if (action.type === "UPDATE_ITEM_quantity") {
    let updatedCartItem = action.data;
    let updatedItems = [...state.items];
    let updatedFinalPrice;
    let updatedNumOfItems;
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.data.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    updatedItems[existingCartItemIndex] = updatedCartItem;

    if (existingCartItem.quantity > updatedCartItem.quantity) {
      updatedFinalPrice =
        state.finalPrice -
        existingCartItem.price *
          (existingCartItem.quantity - updatedCartItem.quantity);

      updatedNumOfItems =
        state.numOfItems -
        (existingCartItem.quantity - updatedCartItem.quantity);
    } else {
      updatedFinalPrice =
        state.finalPrice +
        existingCartItem.price *
          (updatedCartItem.quantity - existingCartItem.quantity);

      updatedNumOfItems =
        state.numOfItems +
        (updatedCartItem.quantity - existingCartItem.quantity);
    }

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
        quantity: item.quantity,
        discount: item.discount,
      },
    });
  };

  const removeItemHandler = (itemId) => {
    dispatchCartAction({ type: "REMOVE", id: itemId });
  };

  const updateItemQuantityHandler = (item) => {
    dispatchCartAction({
      type: "UPDATE_ITEM_quantity",
      data: {
        id: item.id,
        name: item.name,
        color: item.color,
        img: item.img,
        price: item.price,
        size: item.size,
        type: item.type,
        quantity: item.quantity,
        discount: item.discount,
      },
    });
  };

  const cartContext = {
    items: cartState.items,
    finalPrice: cartState.finalPrice,
    numOfItems: cartState.numOfItems,
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

export default CartProvider;
