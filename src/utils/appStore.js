import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer,  
    }
});

export default appStore;
// the above reducer is the combination of all the slices reducers 