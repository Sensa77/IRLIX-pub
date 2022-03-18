import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCocktail } from "../../../utils/api";

const initialState = {
  cocktail: {},
  status: "no-status",
};

export const getDetailData = createAsyncThunk(
  "getDetailData",
  async ({ id }) => {
    try {
      return await fetch(fetchCocktail(id)).then((res) => res.json());
    } finally {
    }
  }
);

export const detailPageSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailData.pending]: (state) => {
      state.status = "loading";
    },
    [getDetailData.fulfilled]: (state, action) => {
      state.status = "done";
      state.cocktail = action.payload;
    },
    [getDetailData.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default detailPageSlice.reducer;
