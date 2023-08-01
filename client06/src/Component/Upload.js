import React,{useState} from 'react'

function Upload(props) {

  const [content,setContent] = useState("");
  const [contentList,setContentList] = useState([]);

  const onsubmit = ()=>{
    let arr = [...contentList];
    arr.push(content);
    setContentList([...arr]);
    setContent("");
  }

  return (
     <div 
     style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}><br/>
      <input type="test" onChange={
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
