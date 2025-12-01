import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../Models/Restaurant'


export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api-ebac.vercel.app/api/efood'}),
    endpoints: (build) => ({
        getRestaurants: build.query<Restaurant[], void>({
            query: () => '/restaurantes',
        }),
        getMenu: build.query<Restaurant, string>({
            query: (id) => `/restaurantes/${id}`
        })
    }),
})

export const { useGetRestaurantsQuery, useGetMenuQuery } = restaurantApi
