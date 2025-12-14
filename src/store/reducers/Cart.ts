import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Menu } from "../../Models/Menu";

type CartState = {
    isOpen: boolean
    itens: Menu[]
}

const initialState: CartState = {
    isOpen: false,
    itens: []
}




export const CartSlice = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        toggle(state, action: PayloadAction<boolean>){
            state.isOpen = !action.payload
                
        },
        add(state, action: PayloadAction<Menu>){
            state.itens.push(action.payload
            )
        },
        remove(state, action: PayloadAction<number>){
            if (state.itens.length != 0){
                state.itens = state.itens.filter((e) => e.id !== action.payload)
            }
        },
        clean(state){
            state.itens = []
        }
    }
})

export const {toggle, add, remove, clean} = CartSlice.actions
export default CartSlice.reducer