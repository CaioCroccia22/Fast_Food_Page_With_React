import { useState } from "react";
import type { Menu } from "../../Models/Menu";
import { add, toggle, remove, clean } from "../reducers/Cart";
import type { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { parseToBrl } from "../../Utils/parseToBrl";

export function useCart(){
    const Cart = useSelector((state: RootState) => state.cart.isOpen)
    const CartList = useSelector((state: RootState) => state.cart.itens)
    const dispatch = useDispatch()

    const [startToPay, setStartToPay] = useState(false)


    function toggleCartMenu(){
        dispatch(toggle(Cart))
    }

    function sumCartFood(){
        const sum = CartList.map((food) => food.preco)
        .reduce((acc, currentValue) => acc + currentValue, 0)
        return sum
    }

    function addFoodCart(food: Menu){
        dispatch(add(food))
    }
    

    function removeFoodCart(id: number){
        dispatch(remove(id))
    }

    function cleanCart(){
        dispatch(clean())
    }

    function confirmCart(CartList: Menu[]){
        if(CartList.length < 1){
            toast.warning("Porfavor adicionar itens ao carrinho", {position: "top-center"})
        } else {
            setStartToPay(!startToPay)
            console.log(startToPay)
        }

    }

    return {CartList, Cart, startToPay,toggleCartMenu, removeFoodCart, addFoodCart, sumCartFood ,confirmCart,cleanCart}
}


