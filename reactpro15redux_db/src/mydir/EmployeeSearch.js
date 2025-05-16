import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEmployees} from "../redux/action";
import axios from "axios";

const EmployeeSearch = () => {
    const [searchName, setSearchName] = useState("");

    // reducers.js의 employeesReducer에서 관리되는 상태를 조회
    const employees = useSelector((state) => state.employees);

    const dispatch = useDispatch(); // dispatch(setEmployees(response.data))
    
    const handleSearch = async() => {
        const response = await axios.get("/findjikwon.jsp", {
            params:{name:searchName},
        });
        dispatch(setEmployees(response.data)); // Apache 서버로부터 받은 json 데이터를 redux state(상태)에 저장
    }
    return(
        <div>
            <h3>직원 이름 검색 결과</h3>
            <input type="text" value={searchName} 
                onChange={(e) => setSearchName(e.target.value)} placeholder="직원명" />
            <button onClick={handleSearch} >검색</button>
            <br/>
            <ul>
                {employees.map((emp) => (
                    <li key={emp.jikwonno}>
                        {emp.jikwonno}번 직원명은 {emp.jikwonname} - {emp.jikwonjik}
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default EmployeeSearch;