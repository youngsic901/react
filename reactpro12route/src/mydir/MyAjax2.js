import React, {useState, useEffect} from "react";
import axios from 'axios';

const MyProduct2 = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [items, setItems] = useState([]);

    // 컴포넌트가 mount된 후 Ajax 요청: fetch
    useEffect(() => {
        axios.get("/react_Test1/sangpum.jsp", {method:"GET"})
        .then((result) => {
            setIsLoaded(true);
            setItems(result.data.items);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    },[]);

    if(error){
        return <div>에러: {error.message}</div>
    }else if(!isLoaded){
        return <div>로딩중...</div>
    }else{
       return(
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name} {item.price}
                </li>
            ))}
        </ul>
       )
    }
}

export default MyProduct2;