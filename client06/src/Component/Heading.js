import React from 'react'

function Heading() {
  return (
    <div>
        <h1>Hello React!!!!!!!!!!!!!!!!!</h1>
      <div
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <link to ="/">home</link>
        <link to ="/Upload">Upload</link>
        <link to ="/List">List</link>

      </div>
    </div>
  )
}

export default Heading
