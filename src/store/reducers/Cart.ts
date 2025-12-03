import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    isOpen: boolean
}

const initialState: CartState = {
    isOpen: false
}




export const CartSlice = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        toggle(state, action: PayloadAction<boolean>){
            state.isOpen = !action.payload
                
        }
    }
})

export const {toggle} = CartSlice.actions
export default CartSlice.reducer