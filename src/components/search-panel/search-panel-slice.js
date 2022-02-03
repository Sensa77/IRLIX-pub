import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  value: ""
}

export const searchPanelSlice = createSlice({
  name: "search",
  initialState, 
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    } 
  }
})
export const {change} = searchPanelSlice.actions
export default searchPanelSlice.reducer