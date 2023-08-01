import React,{useState} from 'react'

function Upload(props) {

  const [content,setContent] = useState("");
 // const [contentList,setContentList] = useState([]); // App.js와 공유하고있음

  const onsubmit = ()=>{
    let arr = [...props.ContentList];
    arr.push(content);
    props.setContentList([...arr]);
    setContent("");
  }

  return (
     <div 
     style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}><br/>
      <input type="test" value={content}onChange={
        (e)=>{
          setContent(e.currentTarget.value);

        }
      }/>
      <button onClick={
        ()=>{
          onsubmit();
        }
      } >제출</button>
    </div>
  )
}

export default Upload
