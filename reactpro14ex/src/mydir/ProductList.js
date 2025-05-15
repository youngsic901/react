import React from "react";
import {useSelector, useDispatch} from 'react-redux';

const ProductList = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const products = [
        { id: 1, name: "마우스", price: 5000 },
        { id: 2, name: "키보드", price: 50000 },
        { id: 3, name: "모니터", price: 500000 },
    ];
    const addCart = (item) => {
        const exists = cart.find(cartItem => cartItem.id === item.id);

        if(!exists){
            alert("장바구니에 추가했습니다.");
            dispatch({type:'ADD_TO_CART', payload:{...item, quantity:1}});
        } else {
            alert("동일 품목이 존재하여 수량을 변경했습니다.");
            dispatch({type:'UPDATE_QUANTITY', payload:{
                id: item.id, 
                quantity: exists.quantity + 1
            }});
        }
    }

    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>장바구니에 추가</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => addCart(item)}>추가</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
