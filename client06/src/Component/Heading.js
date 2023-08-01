import React from 'react'
import {Link} from "react-router-dom";

function Heading() {
  return (
    <div className='App-header'>
        <h1>Hello React!!!!!!!!!!!!!!!!!</h1>
      <div
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <Link to ="/">home</Link>
        <Link to ="/Upload">Upload</Link>
        <Link to ="/List">List</Link>

      </div>
    </div>
  )
}

export default Heading
