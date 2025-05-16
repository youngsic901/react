import { combineReducers } from "redux";

const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_EMPLOYEES_BY_JIKWONJIK":
            return action.payload;
        default:
            return state;
    }
};

const employees2Reducer = (state = [], action) => {
    switch (action.type) {
        case "SET_EMPLOYEES_BY_BUSERNAME":
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    employees: employeesReducer,
    employees2: employees2Reducer,
});