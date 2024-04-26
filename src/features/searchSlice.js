import { createSlice } from "@reduxjs/toolkit";

const initialState = { term: "" };

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.term = payload;
    },
  },
});

export const selectSearchTerm = (state) => state.search.term;

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
