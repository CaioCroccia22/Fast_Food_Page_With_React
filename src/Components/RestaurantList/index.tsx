import { useGetRestaurantsQuery } from '../../API/Api'

import RestaurantCard from '../RestaurantCard'
import { Container } from './style'

export const RestaurantList = () => {
    const {data: restaurants} = useGetRestaurantsQuery()
        

    
    return (
    <Container>
        {restaurants && (
            <>
                {restaurants.map(r => (
                    <RestaurantCard 
                        key={r.id}
                        Restaurant={r}
                        Tags={r.destacado === true ? ["Destacado", `${r.tipo}`] : [`${r.tipo}`]}
                    />
                ))}
            </>
            )
        }

    </Container>
)}

export default RestaurantList