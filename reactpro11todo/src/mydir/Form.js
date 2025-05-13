import React from "react";
import '../mycss/Form.css';

// 두번째 컴포넌트 : 일정 입력 박스와 버튼이 담겨있음
// 현재 컴포넌트는 4개의 props를 받음
// value : input의 내용
// onCreate : button이 클릭될 때 실행 함수
// onChange : input 내용이 변경될 때 실행 함수
// onKeyDown : input에서 Enter키가 눌리면 실행되는 함수

const Form = ({value, onChange, onCreate, onkeyDown}) => {
    return(
        <div className="form">
            할일 입력 : 
            <input value={value} onChange={onChange} onKeyDown={onkeyDown} />
            <div className="create-button" onClick={onCreate}>등 록</div>
        </div>
    );
}

export default Form;