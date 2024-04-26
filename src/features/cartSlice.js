import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItemCount: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
    },
    decrementItemCount: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          state.items = state.items.filter((prod) => prod.id !== payload);
        }
      }
    },
    removeCartItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const selectCartProducts = (state) => state.cart.items;
export const selectCartProductCount = (state, productId) =>
  state.cart.items.find((item) => item.id === productId)?.count ?? 0;

export const selectCartTotalSum = (state) => {
  let sum = 0;
  state.cart.items.forEach((item) => {
    sum += item.prices.current * item.count;
  });
  return sum;
};

export const { incrementItemCount, decrementItemCount, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
