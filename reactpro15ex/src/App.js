import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import EmployeeSearchByJIKWONJIK from './mydir/EmployeeSearchByJIk';
import EmployeeSearchByBusername from './mydir/EmployeeSearchByBusername';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmployeeSearchByJIKWONJIK />
        <EmployeeSearchByBusername />
    </div>
    </Provider>
  );
}

export default App;
