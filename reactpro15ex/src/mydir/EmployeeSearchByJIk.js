import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEmployeesByJIKWONJIK} from "../redux/action";
import axios from "axios";

const EmployeeSearchByJIKWONJIK = () => {
    const [jikwonjik, setJikwonjik] = useState("");

    const employees = useSelector((state) => state.employees);

    const dispatch = useDispatch();

    const handleSearch = async() => {
        const response = await axios.get("/findjikwonByjikwonjik.jsp", {
            // get파라미터 명 : useState 변수명
            params:{jikwonjik:jikwonjik},
        });
        dispatch(setEmployeesByJIKWONJIK(response.data));
    }

    return(
        <div>
            <input type="text" value={jikwonjik}
                onChange={(e) => setJikwonjik(e.target.value)} placeholder="직원 직급" />
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
    )
}

export default EmployeeSearchByJIKWONJIK;