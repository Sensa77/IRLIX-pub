import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../components/cards/cards-slice";
import detailReducer from "../components/pages/detail-page/detailPageSlice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    detail: detailReducer,
  },
});
