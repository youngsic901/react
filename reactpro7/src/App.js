import React from "react";

// function HobbyList({itemProps}){ // 할 일 목록 출력 담당
//   return(
//     <ul>
//       {itemProps.map((item) => (
//         <li>{item.text}</li>
//       ))}
//     </ul>
//   );
// }

// function App() {
//   const [items, setItems] = useState([]);
//   const [text, setText] = useState('');

//   const handleChange = (e) => {
//     setText(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(text.length === 0){
//       return;
//     }

//     const newItem = {
//       text:text,
//       id:Date.now(),
//     };

//     // prevItems : setItems 함수에 의해 전달된 현재 상태값. 즉 이전의 items배열이다.
//     // 리액트가 상태 업데이트를 수행할 때 현재 상태를 콜백함수에 전달해 새로운 상태를 생성할 수 있도록 하는 방식이다.
//     setItems((prevItems) => [...prevItems, newItem]);
//     console.log(items);
//     setText('');
//   }


//   return (
//     <div>
//       <h3>취미 목록</h3>

//         <HobbyList itemProps={items} />

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="new-hobby">취미는?</label>
//         <input id="new-hobby" onChange={handleChange} value={text} />
//         &nbsp;&nbsp;
//         <button>클릭 #{items.length}</button>
//       </form>
//       <br/>
//       <div>총 건수 : {items.length}</div>
//     </div>
//   );
// }

// 클래스로 컴포넌트 작성

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {items:[], text:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <div>
        <h3>취미 목록(class)</h3>
        <HobbyList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-hobby">취미는?</label>
          <input id="new-hobby" onChange={this.handleChange} value={this.state.text} />
          &nbsp;&nbsp;
          <button>클릭 #{this.state.items.length}</button>
        </form>
        <br/>
        <div>총 건수 : {this.state.items.length}</div>
      </div>
    );
  }

  handleChange(e){
    this.setState({text:e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.text.length === 0) {
      return;
    }

    const newItem = {
      text:this.state.text,
      id:Date.now()
    }

    this.setState(state => ({
      items:state.items.concat(newItem),
      text:''
    }));
  }
}

export default App;

class HobbyList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
