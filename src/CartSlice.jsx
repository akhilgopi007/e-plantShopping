import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      state.items.push({name, image, cost, quantity: 1});
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(obj => obj.name != action.payload.name);
    },
    updateQuantity: (state, action) => {
      const {name, change} = action.payload;
      const item = state.items.find((item) => name === item.name);
      if(change < 0) {
        if(item.quantity === 1) {
          state.items = state.items.filter(obj => obj.name != name);
        } else {
          item.quantity--;
        }
      } else {
        item.quantity++;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
