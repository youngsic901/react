import React,{memo} from "react";

const boxstyle = {border: '2px solid blue', padding:'10px'}

const Child = React.memo(({irum, nai}) => {
    console.log('자녀 나이 변경(리렌더링)');

    return(
        <div style={boxstyle}>
            <h3>❤️자녀 1</h3>
            <p>이름 : 홍두깨</p>
            <p>나이 : 5살</p>

            <h3>❤️자녀 2</h3>
            <p>이름 : {irum}</p>
            <p>나이 : {nai}살</p>
        </div>
    );
})

// export default Child;
export default memo(Child); // 메모이징 처리 - memo 기능 활성화