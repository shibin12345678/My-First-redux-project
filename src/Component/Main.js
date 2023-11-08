import React from 'react'
import Counter from './Counter'
import Aside from './Aside'

const Main = () => {
  return (
    <div style={{border:"2px solid black" ,width:"1100px" ,height:"300px", padding:"20px", marginLeft:'50px' ,display:"flex"} }>
          
            <Counter />
            <Aside />
    </div>
  )
}

export default Main
