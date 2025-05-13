import React from "react";
import '../mycss/Form.css';

const Form = ({clientName, address, visitDate, onChange, onCreate, onKeyDown}) => {
    return(
        <div className="form">
            <div>
                <label htmlFor="clientName">거래처 이름 : </label>
                <input value={clientName} onChange={onChange} onKeyDown={onKeyDown} name="clientName" id="clientName"/>
            </div>
            <div>
                <label htmlFor="address">주소 : </label>
                <input value={address} onChange={onChange} onKeyDown={onKeyDown} name="address" id="address"/>
            </div>
            <div>
                <label htmlFor="visitDate">방문일 : </label>
                <input value={visitDate} onChange={onChange} onKeyDown={onKeyDown} name="visitDate" id="visitDate"/>
            </div>
            <br/>
            <div>
                <div className="create-button" onClick={onCreate}>등 록</div>
            </div>
        </div>
    );
}

export default Form;