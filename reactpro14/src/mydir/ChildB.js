import React from "react";
import {useSelector, useDispatch} from 'react-redux';
// useSelector : Redux store의 상태를 가져오는데 사용
// useDispatch : Redux Action을 dispatch하기 위해 사용

import {decrement} from "../redux/ResourceSlice";

function ChildB() {
    const value = useSelector((state) => state.resource.value);
    const dispatch = useDispatch();
    
    return(
        <div>
            <h3>ChildB</h3>
            <p>공유 값 : {value}</p>
            <button onClick={() => dispatch(decrement())}>값 감소</button>
        </div>
    );
}

export default ChildB;