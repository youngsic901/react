import React from "react";
import {Provider} from 'react-redux';
import store from "./redux/store";
import EmployeeSearch from "./mydir/EmployeeSearch";
import CustomerSearch from "./mydir/CustomerSearch";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>검색 자료(DB)읽기</h1>
        <EmployeeSearch />
        <CustomerSearch />
      </div>
    </Provider>
  );
}

export default App;
