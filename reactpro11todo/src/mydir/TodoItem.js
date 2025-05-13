import React from "react";
import "../mycss/TodoItem.css";

// 네 번째 컴포넌트 : 5개의 props를 전달 받음
// text : todo 내용
// checked : 체크박스 상태
// id : 고유 아이디
// onToggle : 체크박스 온 오프
// onRemove : 아이템 삭제 함수

// 체크값이 활성화되면 일정 우측에 체크마크(📌) 표시
// 마우스가 일정 위에 있을 경우 X를 보여줌
const TodoItem = ({text, checked, id, onToggle, onRemove}) => {
    return(
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation(); // onToggle이 실행되지 않도록 함. 이벤트 전파 방지
                onRemove(id);
            }}>&times;</div>

            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {checked && <div className="check-mark">📌</div>} {/* 조건부 렌더링 */}
        </div>
    );
};

export default TodoItem;