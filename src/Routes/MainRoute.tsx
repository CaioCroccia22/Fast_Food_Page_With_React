import { Route, Routes  } from "react-router-dom";

import { Home } from "../Components/Home";
import Profile from "../Components/Profile/Index";


const MainRoutes = () => {
    return (
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile/>} />
    </Routes>
    )
}

export default MainRoutes;