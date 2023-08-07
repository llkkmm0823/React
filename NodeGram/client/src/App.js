import React, { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import Heading from './Component/Heading';
import Main from './Component/Main';
import Join from './Component/Join';

function App() {
    return (
        <>
            {/* 여기에 layout.html 의 내용이 표시될 예정 */}
            <Heading />
            <Routes>
                {/* block content 에 해당한 페이지들이 표시될 예정 */}
                {/* <Route path="/" element={} /> */}
                <Route path="/" element={<Main />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </>
    );
}

export default App;
