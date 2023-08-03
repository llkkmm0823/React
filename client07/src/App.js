import React, {useState} from 'react'
import './App.css';
import Join from './Component/Join';
import Result from './Component/Result';
import Heading from './Component/Heading';
import {  Routes, Route } from "react-router-dom";

function App() {
    const [contentList, setContentList ] = useState([]);
    return (
        <>
          <Heading /><br />
          <Routes>
              <Route path="/join" element={
                <Join contentList={contentList} 
                setContentList={setContentList} />
              } />
              <Route path="/result" element={
                <Result 
                  contentList={contentList} 
                  setContentList={setContentList} 
                />
              }/>
          </Routes>
        </>
    );
}

export default App;
