import React, {useState} from 'react';
// import React, {Component, useState} from 'react';
// Component는 'react' 패키지가 개별적으로 export한 함수를 가져올 때 { } 를 사용함. 구조 분해 할당 구문
import HookTest1 from './mydir/HookTest1';
import HookTest2 from './mydir/HookTest2';

// class App extends Component {
//   state = { // state : 현재 컴포넌트 내부에서 사용(관리)하는 동적 데이터. 변화가 발생하면 자동 렌더링됨
//     count : 0,
//   }

//   countUpdate(n){
//     this.setState({count:n}); // 호출되면 자동 렌더링됨
//   }
//   render() {
//     const {count} = this.state;
//     return (
//       <div>
//         number : {count} &nbsp;
//         <button onClick={() => {
//           this.countUpdate(count +1);
//         }}>증가 1</button>
//         <hr/>
//         <HookTest1 />
//         <hr/>
//         <HookTest2/>
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  const [count, setCount] = useState(0);
  const countUpdate = (n) =>{
    setCount(n);
  };
return (
      <div>
        number : {count} &nbsp;
        <button onClick={() => countUpdate(count +1)}>증가 1</button>
        <hr/>
        <HookTest1 />
        <hr/>
        <HookTest2/>
      </div>
    );
};

export default App;