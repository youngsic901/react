// 리액트에는 데이터를 다루는 두 가지 방식이 있다. props와 state
// props는 부모 컴포넌트가 자식 컴포넌트에 주는 값이다. 자식 컴포넌트는 props를 받아 사용할 뿐 수정은 불가!
// state는 해당 컴포넌트 내부에서 선언하며 값 변경 가능
// props 또는 state가 변경되면 컴포넌트는 자동 리렌더링 한다.

import MyName from "./mydir/MyName";
import MyName2 from "./mydir/MyName2";

function App() {
  return (
    <div>
      메인 컴포넌트 (부모)<br/>
      <MyName name="홍길동" />
      <hr/>
      <MyName/>
      <hr/>
      <MyName name="고길동" addr="테헤란로111"/>  
      <hr/>
      <MyName2 name="신기해" addr="역삼1동 111"/>
      <hr/>
      <MyName2 />
    </div>
  );
}

export default App;
