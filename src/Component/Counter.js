import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increse_Count } from "./Redux/Counter/CouterSlice";
import {  decrese_Count} from "./Redux/Counter/CouterSlice";




const Counter = () => {

  //Passing Color
   const color=useSelector(state=>state.color.value)
  

   // count passing
   const dispach=useDispatch();
   const count=useSelector(state=>state.count.value);

 const increment=()=>{
  dispach(increse_Count())
 }
  const decriment=()=>{
    dispach(decrese_Count())
  }

  return (
    <div style={{ border: '2px dashed red', width: "400px", textAlign: "center", height: "300px" }}>
      <h3    style={{color}}   >Counter</h3>
      <button onClick={increment} style={{ width: '100px', height: "50px", borderRadius: "20px", backgroundColor: "lightblue", border: "none", fontWeight: "600" }}>Increment</button>
      <span style={{ fontWeight: '600' }}>Count = {count}</span>
      <button onClick={decriment}  style={{ width: '100px', height: "50px", borderRadius: "20px", backgroundColor: "lightblue", border: "none", margin: "30px", fontWeight: "600" }}>Decrement</button>
    </div>
  );
}

export default Counter;
