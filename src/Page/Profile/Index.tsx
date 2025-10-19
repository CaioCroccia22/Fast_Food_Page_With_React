import { useEffect, useState } from "react"

import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import { ProfileProducts } from "../../Elements/Profile_Products/Index"


import { ImageContainer, ProfileProductsList, ContainerText, ModalContainer, ButtonModal, DescriptionModal, TextModal, TitleModal, ModalBody, CloseIcon } from "./style"

// import food from '../../assets/img/food.png'
// import CloseIconImage from '../../assets/img/closeIcon.png'
import FoodPresentation from '../../assets/img/macarrao.png'
import { useParams } from "react-router"
import type { Restaurant } from "../../Models/Restaurant"





export type menuType = {
    
    Image: [ Source: string, alt: string],
    Title: string,
    Text: string
}



export const Profile = () => {
    
    const params = useParams();

    const [ModalState, setModalState] = useState(false)
    const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

    const handleModalClick = () => {
        setModalState(!ModalState)
        // console.log(ModalState)
    }

    async function carregaDados() {
        try {
        const response = await fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${params.restaurantId}`)
        if(!response.ok){
            throw new Error("Erro na requisição")
        }

        const data = await response.json();
        console.log(data)
        setRestaurant(data)
        //   console.log(MenuState)

        }
        catch (error){
            console.log("Erro:", error)
        }
    }

    useEffect(() => {
            carregaDados()
            },
    [])

    function CountArr(e){

    }


    return(
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
                {restaurant?.cardapio
                    .slice(0, 6)
                    .map(menu => (
                    <ProfileProducts
                    key={menu.id}
                    ButtonClickEvent={handleModalClick}
                    Title={menu.nome}
                    Text={menu.descricao}
                    Image={menu.foto}
                    Alt={menu.nome}
                    />))
         
                }
            </ProfileProductsList>
        <Bottom />
    </>
) 

}

export default Profile

