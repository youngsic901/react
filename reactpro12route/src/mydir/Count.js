import React, {useState} from "react";

const Counter = () => {
    const [member, setMember] = useState(0);
    
    const increase = () => {
        setMember(member + 1);
    }

    const decrease = () => {
        setMember(member - 1);
    }

    return(
        <div>
            <br/><br/>
            <button onClick={increase}>회원 증가</button>
            &nbsp;&nbsp;
            <button onClick={decrease}>회원 감소</button>
            <p>{member}</p>
        </div>
    );
};

export default Counter;