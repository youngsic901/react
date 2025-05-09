import React from "react";

export default function Subject ({ input, setInput, meter, centiMeter, lengthConversion}) {


    return(
        <div>
            <input type="text" className="input" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={lengthConversion}>계산</button>
            <div className="print">미터 : {meter} / 센티미터 : {centiMeter}</div>
        </div>
    );
}