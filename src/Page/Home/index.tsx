import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import { RestaurantList } from "../../Components/RestaurantList"

export const Home = () => (
    <>
        <Header Page="Home"/>
        <RestaurantList></RestaurantList>
        <Bottom></Bottom>
    </>
)

export default Home