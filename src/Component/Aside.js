import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import randomColor from 'randomcolor';
import { change_color } from './Redux/Color/ColorSlice';

const Aside = ( ) => {
  
  //passing color 
  const  color=useSelector(state=>state.color.value);
      // udate color 
const dispach=useDispatch()

const changeColor=()=>{
        dispach(change_color({
            color:randomColor()
        }))
     
    
}


  return (
    <div style={{border:"2px dashed red" ,width:"400px",  marginLeft:"210px" ,textAlign:"center"}}  >
    <h2  style={{color} }>Aside</h2>
    <button onClick={changeColor}  style={{width:'100px',height:"50px" ,borderRadius:"20px",backgroundColor:"lightblue", border:"none",  fontWeight:"600"  }}>ChangeColor</button>
    </div>
  )
}

export default Aside;
