import type { RootState } from "../store";
import { useSelector } from "react-redux";

export function useCart(){
    const Cart = useSelector((state: RootState) => state.cart.isOpen)


    function toggleCartMenu(){
        return !Cart
    }

    return {toggleCartMenu}
}


