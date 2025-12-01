import {configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './reducers/Cart'
import { restaurantApi } from '../API/Api'


export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store