import React, {useState} from "react";
import Subject from "./MySubject/Subject";

function App() {
  const [meter, setMeter] = useState();
  const [centiMeter, setCenti] = useState();
  const [input, setInput] = useState("");


  const lengthConversion = () => {
    // alert("a");
    // alert(document.querySelector(".input").value);
    const inputNumber = parseFloat(input);
    if(!isNaN(inputNumber)) {
      setMeter(inputNumber);
      setCenti(inputNumber * 100);
    } else {
      setMeter(null);
      setCenti(null);
    }
  }
  return (
    <div>
      <h2>📐길이 환산📏</h2>
      <br/>
      <input type="text" className="input" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={lengthConversion}>계산</button><br/>
      <div className="print">미터 : {meter} / 센티미터 : {centiMeter}</div>
      <br/>
      <Subject input={input} setInput={setInput} meter={meter} centiMeter={centiMeter} lengthConversion={lengthConversion}></Subject>
    </div>
  );
}

export default App;
