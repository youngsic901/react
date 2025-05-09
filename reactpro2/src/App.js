import {Component} from "react";
import Navdata from "./mycomponent/Navdata";

// class component
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>머리글 : 웹문서</h1>
      </header>
    );
  }
}

// function component 
function Welcome(props) { // function은 import 필요 없음(class와 다르게 자동으로 상속)
  return(
    <article>
      {props.who} 글 기사 내용 {/*{ } : JS의 변수와 매핑 */}
    </article>
  );
}

function App() { // index.js에 의해 index.html에 호출되는 JS 모듈
  return (
    <div className="App">
      {/* JSX(Javascript Syntax eXtension, JS를 확장한 문법) 내의 주석 */}
      연습용<br/>
      <Subject></Subject>
      <h2>메인 컴포넌트</h2>
      <Welcome></Welcome>
      <Welcome who="홍길동님"></Welcome>
      <hr/>
      <Navdata msg="가자"></Navdata>
    </div>
  );
}

export default App;
