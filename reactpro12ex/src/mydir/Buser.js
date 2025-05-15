import React, {useState, useEffect} from "react";
import axios from 'axios';

const Buser = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("/buser", {method:"GET"})
        .then((result) => {
            setIsLoaded(true);
            setItems(result.data.items);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        })
    },[]);

    if(error){
        return <div>에러: {error.message}</div>
    }else if(!isLoaded){
        return <div>로딩중...</div>
    }else{
       return(
        <table border={1}>
                <thead>
                    <tr>
                        <th>부서번호</th><th>부서명</th><th>전화</th><th>근무인원수</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr>
                            <td>{item.busernum}</td><td>{item.busername}</td><td>{item.busertel}</td><td>{item.jikwon}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
       )
    }
};

export default Buser;