import { createSlice } from "@reduxjs/toolkit";


export const colorSlice=createSlice({
    name:"color",
              initialState:{
                value:'blue'
              },
              reducers:{
                change_color:(state,action)=>{
                        state.value=action.payload.color
                }
              }

})
export const {change_color}= colorSlice.actions;
export  default colorSlice.reducer;