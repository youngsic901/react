import React from "react";
import Child from './mydir/Child';

function App() {
  const[fatherAge,setFatherAge] = React.useState(34);
  const[childAge, setChildAge] = React.useState(3);

  const changeFatherAge = () => { // 아빠 나이 변경 이벤트 핸들러
    setFatherAge(fatherAge +1);
  }

  const changeChildAge = () => { // 자녀 나이 변경 이벤트 핸들러러
    setChildAge(childAge + 1);
  }

  console.log('아빠 나이가 변경됨 (리렌더링)');

  const boxstyle = {border: '1px solid', padding:'10px'};

  return (
    <div style={boxstyle}>
      <h2>😊😊아빠(홍길동님)</h2>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경</button>

      <hr/>
      <Child irum={'홍자녀'} nai={childAge} />
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
