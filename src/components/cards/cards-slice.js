import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getCocktails} from "../../utils/api"

const initialState = {
  cocktails: [],
  status: "no-status"
}
export const getCocktailsData = createAsyncThunk(
  "getCocktailsData",
  async (data) => {
    try {
      const cocktails = await fetch(getCocktails(data))
      .then((res) => res.json())
      .then((data) => data)
      return cocktails;
    }
    finally{}
  }
)
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers:{

  },
extraReducers: {
  [getCocktailsData.pending]: (state) => {
    state.status = "loading"
  },
  [getCocktailsData.fulfilled]: (state, action) => {
    state.status = "done"
    state.cocktails = action.payload;
  },
  [getCocktailsData.rejected]: (state) => {
    state.status = "error"
  }
}
})

export default cardsSlice.reducer;

