import React from 'react'

function Result( probs ) {
  return (
    <div style={{
        display:"flex", 
        flexDirection:"column", 
        alignItems:"center"}}
    >
        <h3>
            {
                probs.contentList.map(
                    (content, idx)=>{
                        return <div key={idx}>{content}</div>;
                    }
                )
            }
        </h3>
    </div>
  )
}

export default Result
