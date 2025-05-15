import React from "react";
import ShowNumber from "./ShowNumber";

// useSelector를 사용하여 redux 상태(state)를 가져온다.
import { useSelector } from "react-redux";

/*
const ShowNumberSuper = (props) => {
    return(
        <div id="super">
            <h1>ShowNumberSuper</h1>
            ShowNumberSuper의 number : {props.number}
            <ShowNumber number={props.number} />
        </div>
    );
};
*/

const ShowNumberSuper = () => {
    const number = useSelector((state) => state.number);

    return(
        <div id="super">
            <h1>ShowNumberSuper</h1>
            ShowNumberSuper의 number : {number} 📌리덕스 스토어에서 읽음
            <br/>
            <ShowNumber number={number} />
        </div>
    );
}
export default ShowNumberSuper;