import React,{useState} from "react";

const Gugudan = () => {
    const [dan, setDan] = useState('');
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setDan(e.target.value);
    };

    const printValue = (e) => {
        let temp = [];

        if(dan === null || dan > 9 || dan < 1){
            alert("입력값 확인 바랍니다.")
            return;
        }

        for(let i = 1 ; i <= 9 ; i++){
            temp.push(<li>{dan} * {i} = {dan * i}</li>)
        }

        setResult(temp);
    }
    return(
        <div>
            단입력 :
            <input type="number" min={1} max={9} onChange={handleChange}/>
            <button onClick={printValue}>확인</button>
            <ul>{result}</ul>
        </div>
    );
};

export default Gugudan;