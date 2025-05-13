import React from "react";
import TodoItem from './TodoItem';

// 세 번째 컴포넌트 : 일정(TodoItem) 여러 개를 렌더링 해 주는 역할
const TodoItemList = ({todos, onToggle, onRemove}) => {
    // return(
    //     <div>
    //         {/* 테스트 용 */}
    //         <TodoItem text="안녕" />
    //         <TodoItem text="일정" />
    //         <TodoItem text="목록" />
    //     </div>
    // );

    const todoList = todos.map((todo) => (
        <TodoItem 
            {...todo}
            onToggle={onToggle}
            onRemove={onRemove}
            key={todo.id}
        />
    ));

    return(
        <div>{todoList}</div>
    );
};

export default TodoItemList;