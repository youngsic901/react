import React, {useState} from "react";
import Subject from "./Mydir/Subject";
import OurSubject from "./Mydir/Subject2";

const App = () => { // 메인 컴포넌트
  // state 초기화, 수정함수가 필요없아면 적지 않음
  const [subject] = useState({title:'웹문서', subtitle:'리액트'});
  const [friends] = useState([
    {bun:1, irum:'장비', nai:22},
    {bun:2, irum:'관우', nai:32}
  ]);

  // 이벤트 처리 함수
  const handleChangeComponent = () => {
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum}님의 나이는 ${friend.nai}살`);
    })
  };
  return(
    <div>
      이벤트 연습용
      <button onClick={handleChangeComponent}>버튼 클릭</button>
      <hr/>
      <Subject title={subject.title} subtitle={subject.subtitle} 
      changeComponent = {handleChangeComponent}/>{/* 실제로는 자식 컴포넌트에서 호출 */}
      <OurSubject subtitle={subject.subtitle} friends={friends} changeComponent = {handleChangeComponent}/>
    </div>
  );
}

export default App;
