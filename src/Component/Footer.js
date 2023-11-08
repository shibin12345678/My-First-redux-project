import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Footer = () => {
   //Passing color
   const color=useSelector(state=>state.color.value)
  return (
    <div style={{border:'2px solid black', width:'1200px',height:'50px', textAlign:"center" ,marginTop:"20px", marginLeft:"20px",backgroundColor:'lightcoral'}}>
         <h3    style={{color}}   >My redux Project Footer</h3>
    </div>
  )
}

export default Footer
