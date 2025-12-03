import { toggle } from "../reducers/Cart";
import type { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

export function useCart(){
    const Cart = useSelector((state: RootState) => state.cart.isOpen)
    const dispatch = useDispatch()


    function toggleCartMenu(){
        dispatch(toggle(Cart))
        console.log(Cart)
    }

    return {Cart, toggleCartMenu}
}


