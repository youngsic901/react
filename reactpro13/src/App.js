import './App.css';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

/* 
리덕스 처리 주요 흐름
AddNumberSuper : dispatch를 통해 Redux 상태를 갱신
ShowNumberSuper : useselector를 통해 Redux 상태를 읽음
Redux store : 프로젝트의 상태를 중앙에서 관리
Provider : Redex 컴포넌트가 Redux store에 접근 가능하도록 설정정
 */

/*
function App() {
  const [number, setNumber] = useState(0);

  const handleAddNumber = (size) => {
    setNumber(number + size);
    console.log(`number : `, number);
  };

  return (
    <div className="App">
      <h1>Main</h1>
      <AddNumberSuper onClick={handleAddNumber} />
      AddNumber : {number}
      <br/>
      <ShowNumberSuper number={number} />
    </div>
  );
};
*/

const App = () => {
  return(
    <div className='App'>
      <h1>Main(Redux 사용)</h1>
      <AddNumberSuper />
      <ShowNumberSuper />
    </div>
  );
}
export default App;
