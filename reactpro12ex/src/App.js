import React from "react";
import Gugudan from "./mydir/Gugudan";
import Buser from "./mydir/Buser";
import Jikwon from "./mydir/Jikwon";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <h3>메인</h3>
      <hr/>
      <nav>
        <Link to="/gugudan">구구단</Link> | 
        <Link to="/buser">부서정보</Link> | 
        <Link to="/jikwon">직원정보</Link>
      </nav>
      <Routes>
        <Route path="/gugudan" element={<Gugudan/>}></Route>
        <Route path="/buser" element={<Buser/>}></Route>
        <Route path="/jikwon" element={<Jikwon/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
