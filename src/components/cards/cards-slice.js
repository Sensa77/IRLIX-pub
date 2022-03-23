import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCocktails, fetchCocktail } from "../../utils/api";

const initialState = {
  cocktails: [],
  status: "no-status",
  value: "",
  showIndicator: "",
};
export const getCocktailsData = createAsyncThunk(
  "getCocktailsData",
  async (data) => {
    try {
      const cocktails = await fetch(getCocktails(data))
        .then((res) => res.json())
        .then((data) => data);
      return cocktails;
    } finally {
    }
  }
);

export const addFavoriteCocktail = createAsyncThunk(
  "addFavoriteCocktail",
  async ({ id, favoriteBody }) => {
    try {
      const response = await fetch(fetchCocktail(id), {
        method: "PUT",
        body: JSON.stringify(favoriteBody),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      return response.json();
    } finally {
    }
  }
);

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    changeShowIndicator: (state, action) => {
      state.showIndicator = action.payload;
    },
  },
  extraReducers: {
    [getCocktailsData.pending]: (state) => {
      state.status = "loading";
    },
    [getCocktailsData.fulfilled]: (state, action) => {
      state.status = "done";
      state.cocktails = action.payload;
    },
    [getCocktailsData.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { change, changeShowIndicator } = cardsSlice.actions;
export default cardsSlice.reducer;
