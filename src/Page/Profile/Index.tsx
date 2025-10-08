import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import { ProfileProducts } from "../../Elements/Profile_Products/Index"
import { ImageContainer, ProfileProductsList, ContainerText } from "./style"
import FoodPresentation from '../../assets/img/macarrao.png'


export const Profile = () => (
    <>
        <Header Page="Profile"/>
        <ImageContainer>    
        <img src={FoodPresentation} />
            <ContainerText>
                <p>Italiana</p>
                <p>La Dolce Vita Trattoria</p>
            </ContainerText>
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