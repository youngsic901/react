import React, {useState, useEffect} from "react";

const MyiProduct = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // 컴포넌트가 mount된 후 Ajax 요청 : fetch
    useEffect(() => {
        fetch("/react_Test1/abc.jsp", {method:"GET"})
        .then(res => {
            if(!res.ok){
                throw new Error("네트워크 에러");
            }
            return res.json();
        })
        .then((result) => {
            setIsLoaded(true);
            setItems(result.items);
        },(error) => {
            setIsLoaded(true);
            setError(error);
        })
    },[]);

    if(error){
        return <div>에러 : {error.message}</div>
    } else if(!isLoaded){
        return <div>로딩중...</div>
    } else {
        return(
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
};

export default MyiProduct;