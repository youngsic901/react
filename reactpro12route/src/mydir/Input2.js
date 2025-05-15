import React,{useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        irum:'',
        nai:'',
        juso:''
    });

    const {irum, juso, nai} = params; // 구조분해할당. 순서가 아니라 변수이름과 프로퍼티가 일치해 치환됨

    const changeFunc = (e) => {
        const value = e.target.value; // 이벤트가 발생(event trigger)된 개체 값 치환
        const id = e.target.id;

        setParams({
            ...params, // 스프레드 연산자 사용. 깊은 복사로 새 객체를 생성
            [id]:value
        })
    }

    return(
        <div>
            <br/>
            <div>
                <label htmlFor="irum">이름 :</label>
                <input type="text" value={irum} id="irum" onChange={changeFunc}/>
            </div>
            <div>
                <label htmlFor="nai">나이 :</label>
                <input type="text" value={nai} id="nai" onChange={changeFunc}/>
            </div>
            <div>
                <label htmlFor="juso">주소 :</label>
                <input type="text" value={juso} id="juso" onChange={changeFunc}/>
            </div>
            <hr/>
            <table>
                <tr>
                    <td>이름 : {irum}</td>
                    <td>나이 : {nai}</td>
                    <td>주소 : {juso}</td>
                </tr>
            </table>
        </div>
    );
};

export default Input2;