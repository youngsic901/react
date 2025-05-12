import React from "react";

// 생명주기(life cycle) 관련 메소드는 시스템에 의해 호출됨, 콜백 메소드
class Clock2 extends React.Component{
    constructor(props) {
        // 컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행됨
        super(props);
        this.state = {date:new Date()};
    };

    componentDidMount() {
        // 컴포넌트가 마운트 됨, 즉 컴포넌트의 첫 번째 렌더링을 마치면 호출되는 메소드
        // 일정한 시간 간격을 두고 반복해서 코드를 실행(시간 표시) - setInterval()
        this.timerId = setInterval(
            () => this.showSigan(), 1000
        );
    }

    componentWillUnmount(){
        // 컴포넌트가 화면에서 사라지기 직전에 호출된다. 주로 마무리 작업 담당
        clearInterval(this.timerId); // setInterval 함수 수행 종료
    }

    showSigan() {
        this.setState({
            date:new Date()
        });
    }
    render() {
        return (
            <div>
                <h2>반가워</h2>
                <h3>정적 시간 : 지금은 {new Date().toLocaleTimeString()}</h3> {/* state X */}
                <h3>동적 시간 : 지금은 {this.state.date.toLocaleTimeString()}</h3> {/* state O */}
            </div>
        );
    }
}

export default Clock2;