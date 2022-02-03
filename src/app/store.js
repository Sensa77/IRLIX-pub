import { configureStore } from "@reduxjs/toolkit";
import searchPanelReducer from "../components/search-panel/search-panel-slice";

export const store = configureStore({
  reducer: {
    search: searchPanelReducer
  }
})