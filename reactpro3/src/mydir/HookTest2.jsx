import React, {useState, useEffect} from "react";
import '../App.css';
import pic1 from '../sample1.jpeg';

export default function HookTest2(){
    const [item, setItem] = useState(0);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    useEffect(() => { // 현재 컴포넌트가 mount 될 때 useEffect의 내부함수가 실행
        let a = 1; // 지역변수
        console.log(a);
    },[]); //  [](의존성 배열) : 예를 들어 kor 변수가 있을 때 kor을 넣으면 kor이 변경될 때마다 실행

    let stcss = {color:'blue', textAlign:'center', fontSize : '30pt'}; // css 연습용

    return(
        <div className="App">
            <div>
                number : {item} &nbsp;
                <button onClick={incrementItem}>증가</button>&nbsp;
                <button onClick={decrementItem}>감소</button>&nbsp;
            </div>

            {/* CSS 적용 연습 : style 속성 값은 {} 안에 적음 */}
            <h1 className="black_bar">리액트의 이해</h1>
            <h3 style={{color: 'red'}}>ECMA의 이해</h3>
            <h3 style={stcss}>CSS 처리에 대한 이해</h3>

            
            {/* 이미지 적용 1 */}
            <div>
                <img src={pic1} alt='src 폴더 내의 이미지'></img>
            </div>
            {/* 이미지 적용 2 */}
            <div className='image-bg'/>
            {/* 이미지 적용 3 : public 폴더에 접근 : 환경변수를 사용함 */}
            <div>
                <img src={`${process.env.PUBLIC_URL}/imgs/sample3.jpeg`} alt='public 폴더 내의 이미지'></img>
            </div>
        </div>
    );
}

// export default HookTest2;