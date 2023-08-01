import {Routes,Route} from "react-router-dom";
import React,{useState} from 'react'


import Heading from "./Component/Heading";
import List from "./Component/List";
import Upload from "./Component/Upload";

//컴포넌트 간의 state 변수를 공유하려면 그들을 함께 컨트롤하고 있는 상위 컴포넌트(app.js)에서 변수값을 공유하도록함
const [contentList,setContentList] = useState([]);

//Heading 태그는 화면의 상단에 상시게시
//나머지 두 개의 태그는 링크(메뉴) 클릭에 따라 이동
function App() {
  return (
    <>
        <Heading/>
        <Routes>
          <Route path="/list" element={
          <List
          contentList={contentList}
          setContentList={setContentList}
          />
          }/>
          <Route path="/Upload" element={
          <Upload
          contentList={contentList}
          setContentList={setContentList}
          />
          }/>
    </Routes>
    
    </>
  );
}

export default App;
