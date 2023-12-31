import React from 'react'
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div>
        <h1>Hello React!!</h1>
        <div  
        style={{
          display:"flex", 
          flexDirection:"column", 
          alignItems:"center"}}
        >
            <Link to="/" >home</Link>
            <Link to="/upload" >upload</Link>
            <Link to="/list" >list</Link>
            <Link to="/join" >Join</Link>
            <Link to="/members" >Members</Link>
        </div>
    </div>
  )
}

export default Heading
