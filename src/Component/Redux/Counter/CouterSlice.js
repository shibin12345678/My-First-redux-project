import { createSlice } from "@reduxjs/toolkit";


export    const   countSlice=createSlice({
         name:'count',
         initialState:{
              value:5
         },
         reducers:{
            increse_Count:(state)=>{
                state.value +=1
            },
            decrese_Count:(state)=>{
                 state.value -=1
            }
         }
})
export const {increse_Count,decrese_Count} =countSlice.actions;
export default  countSlice.reducer;