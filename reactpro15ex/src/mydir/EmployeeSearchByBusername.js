import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setEmployeesByBUSERNAME} from "../redux/action";
import axios from "axios";

const EmployeeSearchByBusername = () => {
    const [busername, setBusername] = useState("");

    const employees2 = useSelector((state) => state.employees2);

    const dispatch = useDispatch();

    const handleSearch = async() => {
        const response = await axios.get("/findjikwonBybusername.jsp", {
            // get파라미터 명 : useState 변수명
            params:{busername:busername},
        });
        dispatch(setEmployeesByBUSERNAME(response.data));
    }

    return(
        <div>
            <input type="text" value={busername}
                onChange={(e) => setBusername(e.target.value)} placeholder="부서명" />
            <button onClick={handleSearch} >검색</button>
            <br/>
            <ul>
                {employees2.map((emp) => (
                    <li key={emp.jikwonno}>
                        {emp.jikwonno}번 직원명은 {emp.jikwonname} - {emp.jikwonjik}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeSearchByBusername;