import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../Models/Restaurant'
import type { Order } from '../Models/Payment'


export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api-ebac.vercel.app/api/efood'}),
    endpoints: (build) => ({
        getRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurantes',
        }),
        getMenu: build.query<Restaurant, string>({
            query: (id) => `/restaurantes/${id}`
        }),
        postPayment: build.mutation<string, Order>({
            query: (order) => (
                {url: '/checkout', 
                method: 'POST',
                body: order}
            )
        })
    }),
})

export const { useGetRestaurantsQuery, useGetMenuQuery, usePostPaymentMutation } = restaurantApi
