import React, {useState, useEffect} from "react";
import axios from "axios";

const Jikwon = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [list, setList] = useState();

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const printList = () => {
        axios.get(`/jikwon?busername=${encodeURIComponent(input)}`, {method:"GET"})
        .then((result) => {
            setIsLoaded(true);
            setItems(result.data.items);
            setList(
                <table border={1}>
                    <thead>
                        <tr>
                            <th>직원번호</th><th>직원명</th><th>부서명</th><th>직급</th><th>담당고객수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.jikwonno}>
                                <td>{item.jikwonno}</td><td>{item.jikwonname}</td><td>{item.busername}</td><td>{item.jikwonjik}</td><td>{item.gogeksu}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        })
    }
        
    return(
        <div>
            <input type="text" name="busername" placeholder="부서명" value={input} onChange={handleChange}/>
            <button onClick={printList}>등록</button>
            {error && <div>오류 발생: {error.message}</div>}
            {isLoaded && items.length === 0 && <div>검색 결과가 없습니다.</div>}
            {items.length > 0 &&
                <table border={1}>
                    <thead>
                        <tr>
                            <th>직원번호</th><th>직원명</th><th>부서명</th><th>직급</th><th>담당고객수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.jikwonno}>
                                <td>{item.jikwonno}</td>
                                <td>{item.jikwonname}</td>
                                <td>{item.busername}</td>
                                <td>{item.jikwonjik}</td>
                                <td>{item.gogeksu}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default Jikwon;