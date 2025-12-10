import type { Order } from "./Payment";
import { useCart } from "../store/Hooks/useCart";

const {CartList} = useCart()
const ArrCart = CartList.map(e => [e.id, e.preco])

export const FormFormat: Order = {
    products:[
        id = ArrCart
    ] 
}