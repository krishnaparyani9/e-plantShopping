import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const updateCartTotals = (state) => {
  state.totalQuantity = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  state.totalAmount = state.items.reduce(
    (sum, item) => sum + item.quantity * item.cost,
    0
  );
  state.items.forEach(item => {
    item.totalPrice = item.quantity * item.cost;
  });
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      const cost = newItem.cost ?? newItem.price;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.cost;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          cost,
          price: cost,
          image: newItem.image,
          quantity: 1,
          totalPrice: cost,
        });
      }

      updateCartTotals(state);
    },

    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload || item.name === action.payload
      );

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }

      updateCartTotals(state);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (!Number.isInteger(quantity) || quantity < 0) {
        return;
      }

      const itemIndex = state.items.findIndex(
        item => item.id === id || item.name === id
      );

      if (itemIndex !== -1 && quantity === 0) {
        state.items.splice(itemIndex, 1);
      } else if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        item.quantity = quantity;
        item.totalPrice = item.cost * quantity;
      }

      updateCartTotals(state);
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
