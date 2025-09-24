import Bottom from "../Bottom"
import Header from "../Header"
import { ProfileProducts } from "../../Elements/Profile_Products/Index"
import { ImageContainer, ProfileProductsList } from "./style"

export const Profile = () => (
    <>
        <Header Page="Profile"/>
            <ImageContainer>
            </ImageContainer>
            <ProfileProductsList>
                <ProfileProducts></ProfileProducts>
                <ProfileProducts></ProfileProducts>
                <ProfileProducts></ProfileProducts>
                <ProfileProducts></ProfileProducts>
                <ProfileProducts></ProfileProducts>
                <ProfileProducts></ProfileProducts>
                <ProfileProducts></ProfileProducts>
            </ProfileProductsList>
        <Bottom />
    </>
) 

export default Profile