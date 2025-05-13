import { useState, useEffect } from "react";

function MyForm() {
    const [formData, setFormData] = useState({
        irum:'',
        nai:'',
        menu:'파전'
    });
    
    useEffect(() =>  {
        console.log({formData});
    },[formData]);

    const dataChange = (e) => {
        const name = e.target.name; // form tag 내의 여러 tag의 name 속성 얻기
        const value = e.target.value;
        
        setFormData(prev => ({
            ...prev, // formData 객체의 모든 키:값을 복사해 새로운 객체를 생성
            [name]:value // form tag 내의 변경된 name에서 가져온 값으로 해당 필드만 갱신
        }));

        // console.log({...formData});
        console.log({[name]:value});
        
    }
    
    const dataSubmit = (e) => { // 입력자료 오류 검사, 나이가 숫자인지 확인
       e.preventDefault();

       const {nai} = formData;
       if(nai.trim() === '' || isNaN(Number(nai))){
        alert("나이는 숫자로 입력");
       }
    }

    return(
        <>
            <h3>안녕 {formData.irum}, 너는 {formData.nai}살 선택한 음식은 {formData.menu}</h3>
            <form onSubmit={dataSubmit}>
                이름 입력 : <input type="text" name="irum" onChange={dataChange} />
                <br/>
                나이 입력 : <input type="text" name="nai" onChange={dataChange} />
                <br/>
                야식 입력 : <select name="menu" value={formData.menu} onChange={dataChange}>
                    <option value="치킨">치킨</option>
                    <option value="파전">파전</option>
                    <option value="족발">족발</option>
                </select>
                <br/><br/>
                <button type="submit">전송</button>
            </form>
        </>
    );
}

export default MyForm;