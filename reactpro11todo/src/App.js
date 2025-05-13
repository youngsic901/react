import React,{useState, useCallback} from "react";
import TodoTemplate from "./mydir/TodoTemplate";
import Form from './mydir/Form';
import TodoItemList from './mydir/TodoItemList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {id:0, text:'팀회의(10:00)', checked:true},
    {id:1, text:'인사관리 화면 작성', checked:false},
    {id:2, text:'커피 타임(16:00)', checked:false},
  ]);

  const [nextId, setNextId] = useState(3); // 다음 id 값

  // useCallback : Hooks의 일종. memoization을 통해 재사용할 수 있게 함
  // [](의존성 배열)에 지정된 값들이 변경되지 않는 한 동일한 함수 인스턴스를 반환해 불필요한 함수 재생성 방지
  const hadleChange = useCallback((e) => {
    setInput(e.target.value);
  },[]);

  const handleCreate = useCallback(() => {
    if(input.trim() === '') return; // 비어있는 목록 입력 방지

    setTodos((prevTodos) => 
      prevTodos.concat({ // concat() : 기존 배열을 토대로 변경한 새로운 배열 반환. 기존 배열은 갱신 안됨
        id:nextId,
        text:input,
        checked:false
      })
    );

    setInput(''); // 입력 필드 초기화
    setNextId((prevId) => prevId + 1);
  },[input, nextId]);

  const handleKeyDown = useCallback(
    (e) => {
      if(e.key === 'Enter'){ // 사용자가 엔터 키를 눌렀는지 확인
        handleCreate();
      }
    }, [handleCreate]
  ); // handleCredate함수가 변경될 때마다 handleKeyDown 함수가 재생성

  const handleToggle = useCallback((id) => { // id : 토글 대상 할일 목록을 식별하기 위한 고유 id
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        // 토글 대상 일정 목록을 찾기 위해 id를 사용
        todo.id === id ? {...todo, checked:!todo.checked} : todo
      )
    );
  },[]); // handleToggle함수는 마운트 될 때 한 번만 생성하고 이후에는 재활용

  // 특정 할 일 목록 삭제 함수
  const handleRemove = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  },[]);

  return (
    <TodoTemplate
      form = {
        <Form value={input} 
          onChange={hadleChange} 
          onCreate={handleCreate} 
          onkeyDown={handleKeyDown} 
        />
      }>

        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove} />
    </TodoTemplate>
  );
}

export default App;
