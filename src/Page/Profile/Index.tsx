import { useEffect, useState } from "react"
import { useParams } from "react-router"

import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import { ProfileProducts } from "../../Elements/Profile_Products/Index"
import FoodPresentation from '../../assets/img/macarrao.png'

import type { Restaurant } from "../../Models/Restaurant"
import { 
  ImageContainer, 
  ProfileProductsList, 
  ContainerText, 
  ContainerProducts, 
  ModalContainer, 
  ModalBody, 
  ModalTitle, 
  ModalText,
  ModalDescription,
  ModalButton
} from "./style"



export const Profile = () => {
    
    const {restaurantId}                    = useParams();
    
    
    const [restaurant, setRestaurant]       = useState<Restaurant | null>(null)
    const [modalState, setModalState]       = useState(false)
    const [modalFood, setModalFood]         = useState<number>(0)
    
    
    const getFoodModal = restaurant?.cardapio.find(
        (menu) => menu.id === modalFood)


    
    const handleModalClick = (id: number) => {
        setModalState(!modalState)
        setModalFood(id)
    }

    useEffect(() => {
        async function carregaDados() {
            try {
                const response = await fetch(
                    `https://api-ebac.vercel.app/api/efood/restaurantes/${restaurantId}`
                )
            
            
                if(!response.ok){
                    throw new Error("Erro na requisição")
                }

                const data = await response.json();
                setRestaurant(data)

            }   catch (error){
                    console.log("Erro:", error)
                }
        }

        carregaDados()
    }, [restaurantId])


    const returnProduct = () => (
        <ProfileProductsList>
            {restaurant?.cardapio
                .slice(0, 6)
                .map(menu => (
                <ProfileProducts
                key={menu.id}
                ButtonClickEvent={() => handleModalClick(menu.id)}
                Title={menu.nome}
                Text={menu.descricao}
                Image={menu.foto}
                Alt={menu.nome}
                />))
        
            }
        </ProfileProductsList>
        )


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
        <ContainerProducts activeModal={modalState}>
        {getFoodModal && modalState &&
            <ModalContainer activeModal={modalState}>
                <img src={getFoodModal?.foto} alt={getFoodModal?.nome}/>
                <ModalBody>
                    <ModalTitle>{getFoodModal?.nome}</ModalTitle>
                    <ModalText>{getFoodModal?.descricao}</ModalText>
                    <ModalDescription>{getFoodModal?.porcao}</ModalDescription>
                    <ModalButton>Adicionar ao carrinho R$ - {getFoodModal?.preco}</ModalButton>
                </ModalBody>
            </ModalContainer>}
        {returnProduct()}
        </ContainerProducts>
        <Bottom />
    </>
) 

}

export default Profile

