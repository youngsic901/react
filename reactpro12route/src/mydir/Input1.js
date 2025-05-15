import React, {useState} from "react";

const Input1 = () => {
    const [txtValue, setTxtValue] = useState('');

    const changeFunc = (e) => {
        setTxtValue(e.target.value);
    };

    return(
        <div>
            <label htmlFor="input">자료입력 : </label>
            <input type="text" value={txtValue} id="input" onChange={changeFunc}/>
            <br/>
            {txtValue}
        </div>
    );
};

export default Input1;