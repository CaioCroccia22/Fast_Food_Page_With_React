import { Route, Routes  } from "react-router-dom";

import { Home } from "../Page/Home";
import Profile from "../Page/Profile/Index";


const MainRoutes = () => {
    
return (
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/Profile/:restaurantId" element={<Profile/>} />
    </Routes>
    )
}

export default MainRoutes;