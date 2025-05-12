import { useState, useEffect } from "react";

const Clock3 = () => {
    const [date, setDate] = useState(new Date());

    // 화면에 렌더링이 완료된 이후에 수행되며 componenentDidMount와 componentDidUpdate, componenetWillUnmount가 합쳐진 것
    useEffect(() => {
        const timerId = setInterval(() => showSigan(), 1000);

        return () => {
            clearInterval(timerId);
        }
    },[]);

    const showSigan = () => {
        setDate(new Date());
    }

    return (
        <div>
            <h2>어떻게 지내</h2>
            <h3>정적 시간 : 지금은 {new Date().toLocaleTimeString()}</h3> {/* state X */}
            <h3>동적 시간 : 지금은 {date.toLocaleTimeString()}</h3> {/* state O */}
        </div>
    );
}

export default Clock3;