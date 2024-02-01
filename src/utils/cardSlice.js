import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating state here means directly modifying our states(data)
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {

      //Redux Toolkit says either mutate the current state or return a new state
      state.items.length = 0;
      //console.log(current(state));  import { current } from "@reduxjs/toolkit"
    },
  },
});

export const { addItem, removeItem, clearCart } = cardSlice.actions;

export default cardSlice.reducer;
//this reducer is the combination of the above reducers method
