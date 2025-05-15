import React from "react";
import {useSelector, useDispatch} from 'react-redux';
// useSelector : Redux store의 상태를 가져오는데 사용
// useDispatch : Redux Action을 dispatch하기 위해 사용

import { increment, reset } from "../redux/ResourceSlice";

function ChildA() {
    const value = useSelector((state) => state.resource.value);
    const dispatch = useDispatch();
    
    return(
        <div>
            <h3>ChildA</h3>
            <p>공유 값 : {value}</p>
            {/* 버튼을 클릭하면 reducer의 action.type중 하나를 호출 : state.value 값 변경 */}
            <button onClick={() => dispatch(increment())}>값 증가</button>
            &nbsp;&nbsp;
            <button onClick={() => dispatch(reset())}>초기화</button>

        </div>
    );
}

export default ChildA;