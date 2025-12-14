import type { Menu } from "../../Models/Menu";
import { add, toggle, remove, clean } from "../reducers/Cart";
import type { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

export function useCart(){
    const Cart = useSelector((state: RootState) => state.cart.isOpen)
    const CartList = useSelector((state: RootState) => state.cart.itens)
    const dispatch = useDispatch()


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

    return {CartList, Cart, toggleCartMenu, removeFoodCart, addFoodCart, sumCartFood, cleanCart}
}


