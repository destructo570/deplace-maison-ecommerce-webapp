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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
