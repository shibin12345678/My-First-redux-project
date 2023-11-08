import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
  

const Header = () => {

  //Passing color 
     const color=useSelector(state=>state.color.value)


     //PAssing Count

     const count=useSelector(state=>state.count.value);
 
  return (
    <div  style={{padding:'20px'}}>
        <h3  style={{color,border:'2px solid black', width:'1200px',height:'50px', textAlign:"center",backgroundColor:"lightblue"}}> Redux Project
        <h1>{count}</h1>
        </h3>

      
    </div>
  )
}

export default Header
