import { useEffect, useState } from 'react'
import {Product} from '../../Elements/Products'
import type { Restaurant } from '../../Models/Restaurant'
import { Container } from './style'

export const ProductList = () => {
    const [restaurant, restaurantState] = useState<Restaurant[]>([])
        
    
        useEffect(() => {
            fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => restaurantState(data))
            console.log(restaurant)
        }
            ,[])
    
    return (
    <Container>
        {restaurant.map(r => (
            <Product 
                key={r.id}
                Restaurant={r}
                Tags={r.destacado === true ? ["Destacado", `${r.tipo}`] : [`${r.tipo}`]}

            />
        ))}

    </Container>
)}