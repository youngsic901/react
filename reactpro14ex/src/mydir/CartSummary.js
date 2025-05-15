import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
    const cart = useSelector((state) => state.cart);
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    }

    return(

        <div>
            총 금액 : {getTotalPrice()}
        </div>
    );
};

export default CartSummary;