import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const initialCartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalItems = action.payload.totalItems;
    },
    addItem(state, action) {
      let newItem = action.payload;
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
    },
    removeItem(state, action) {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.payload;
      });

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        let updatedTotalAmount = state.totalAmount;
        let updatedTotalItems = state.totalItems;

        updatedTotalAmount =
          state.totalAmount -
          existingCartItem.price * existingCartItem.quantity;
        updatedTotalItems = state.totalItems - existingCartItem.quantity;

        console.log(updatedItems);

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedTotalItems,
        };
      }
    },
    updateItemQuantity(state, action) {
      const newItem = { ...action.payload };
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
          existingCartItem.price *
            (existingCartItem.quantity - newItem.quantity);

        updatedTotalItems =
          state.totalItems - (existingCartItem.quantity - newItem.quantity);
      } else {
        updatedTotalAmount =
          state.totalAmount +
          existingCartItem.price *
            (newItem.quantity - existingCartItem.quantity);

        updatedTotalItems =
          state.totalItems + (newItem.quantity - existingCartItem.quantity);
      }

      updatedItems[existingCartItemIndex] = newItem;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems,
      };
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "https://deplacemaisontest-default-rtdb.firebaseio.com/cart.json",
        cart
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://deplacemaisontest-default-rtdb.firebaseio.com/cart.json"
      );

      if (response.data.items === undefined) {
        response.data.items = [];
      }
      dispatch(cartActions.replaceCart(response.data));

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
