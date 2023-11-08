import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./Redux/Color/ColorSlice";
import    countReducer  from "./Redux/Counter/CouterSlice";

export default configureStore({
       reducer:{
      color:colorReducer,
      count:countReducer
       }
})