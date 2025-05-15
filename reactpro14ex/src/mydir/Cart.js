import React from "react";
import {useSelector, useDispatch} from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const increaseQuantity = (item) => {
        dispatch({type:'UPDATE_QUANTITY', payload:{
            id: item.id,
            quantity: item.quantity + 1
        }});
    }

    const decreaseQuantity = (item) => {
        if(item.quantity <= 1){
            dispatch({type:'REMOVE_FROM_CART', payload:{id: item.id}});
        } else {
            dispatch({type:'UPDATE_QUANTITY', payload:{
                id: item.id,
                quantity: item.quantity -1
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
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => increaseQuantity(item)}>+</button>&nbsp;&nbsp;
                                {item.quantity}&nbsp;&nbsp;
                                <button onClick={() => decreaseQuantity(item)}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;