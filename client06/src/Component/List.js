import React from 'react'

function List(props) {
  return (
    <div 
    style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}
    >
        <h1>
        {/*contentList에 있는 단어들을 하나씩 출력*/}
         {
          props.contentList.map(
            (content,idx)=>{
              return <div key={idx}>{content}</div>
            }
          )
         }
        </h1>
    </div>
  )
}

export default List
