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
    (sum, item) => sum + item.totalPrice,
    0
  );
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      updateCartTotals(state);
    },

    removeItem(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }

      updateCartTotals(state);
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (!Number.isInteger(quantity) || quantity < 1) {
        return;
      }

      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
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
