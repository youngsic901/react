import React, {Component} from "react";

class Subject extends Component {
    render() {
        const clickHandler = () => { // 버튼 클릭 이벤트 핸들러
            console.log("두 번째 버튼을 클릭함");
        }
        const keyupHandler = (e) => { // textbox 관련 이벤트 핸들러
            console.log("텍스트 이벤트 성공");
            console.log("입력 값은 ", e.target.value);
        }
        return (
            <div>
                <b>자식 컴포넌트 1</b><br/>
                출력 : {this.props.title} {this.props.subtitle}
                <br/><br/>
                버튼으로 이벤트 발생
                <button onClick={function() {this.props.changeComponent();}.bind(this)}>{this.props.subtitle}</button>
                <br/>
                <button onClick={clickHandler}>두 번째 버튼</button>
                <br/><br/>
                <input type="text" onKeyUp={keyupHandler}/>
            </div>
        );
    }
}

export default Subject;