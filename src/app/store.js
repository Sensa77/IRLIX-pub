import { configureStore } from "@reduxjs/toolkit";
import searchPanelReducer from "../components/search-panel/search-panel-slice";
import cardsReducer from "../components/cards/cards-slice"
export const store = configureStore({
  reducer: {
    search: searchPanelReducer,
    card: cardsReducer
  }
})