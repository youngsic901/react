import React from "react";
import MyTest from "./mydir/Test";
import HelloAbout from "./mydir/About";
import Count from "./mydir/Count";
import Input1 from "./mydir/Input1";
import Input2 from "./mydir/Input2";
import MultiData from "./mydir/Multidata";
import MyiProduct from "./mydir/MyAjax";
import MyProduct2 from "./mydir/MyAjax2";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우터 연습용 메인</h2>
        <MyTest/>
        <hr/>
        <nav>
          <Link to="/">Test화면</Link> | 
          <Link to="/about">About화면</Link> | 
          <Link to="/count">Count화면</Link> |
          <Link to="/input">입력화면1</Link> |
          <Link to="/input2">입력화면2</Link> |
          <Link to="/multi">배열자료</Link> | 
          <Link to="/product1">Ajax요청1</Link> | 
          <Link to="/product2">Ajax요청2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MyTest />}></Route>
          <Route path="/about" element={<HelloAbout/>}></Route>
          <Route path="/count" element={<Count />}/>
          <Route path="/input" element={<Input1/>}/>
          <Route path="/input2" element={<Input2/>}/>
          <Route path="/multi" element={<MultiData/>}/>
          <Route path="/product1" element={<MyiProduct/>}/>
          <Route path="/product2" element={<MyProduct2/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
