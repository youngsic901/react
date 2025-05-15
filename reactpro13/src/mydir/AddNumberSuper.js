import React from "react";
import AddNumber from "./AddNumber";
// dispatch를 사용하여 숫자를 증가시키는 액션을 디스패치한다.
// dispatch는 액션을 Redux store에 전달하여 상태를 변경하는 트리거 역할을 한다.
import { useDispatch } from "react-redux";

/*
const AddNumberSuper = (props) => {
    return(
        <div id="super">
            <h1>AddNumberSuper</h1>
            <AddNumber onClick={(size) => props.onClick(size)} />
        </div>
    );
};
*/

const AddNumberSuper = () => {
    const dispatch = useDispatch();

    const handleClick = (size) => {
        dispatch({type:'INCRESE_NUMBER', payload:size}); // reducer의 numberReducer를 호출
    }

    /*
    처리 동작 흐름 요약
    1) 사용자가 AddNumber 에서 버튼을 클릭
    2) AddNumber 컴포넌트의 onClick 콜백이 시행되며, size 값을 상위 컴포넌트(AddNumberSuper)로 전달
    3) AddNumberSuper의 handleClick함수가 실행되어 dispatch한다.
    4) dispatch는 액션 상태를 reducer에 전달
    5) reducer는 현재 상태를 갱신하여 새로운 상태를 반환하고 discribe(구독) 가능하도록 함, 현재 리듀서를 스토어에 덮어쓰기함.
    6) store에 저장된 state를 참조하는 컴포넌트 리렌더링(ShowNumber)
     */
    return(
        <div id="super">
            <h1>AddNumberSuper</h1>
            {/* <AddNumber onClick={(size) => props.onClick(size)} /> */}
            <AddNumber onClick={handleClick} />
        </div>
    );
};

export default AddNumberSuper;