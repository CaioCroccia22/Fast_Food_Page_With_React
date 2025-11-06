import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { AnimatePresence } from "framer-motion"


import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import { ProfileProducts } from "../../Elements/Profile_Products/Index"
import FoodPresentation from '../../assets/img/macarrao.png'
import CloseIcon from "../../assets/img/closeIcon.png"

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
  ModalButton,
  CloseIconDiv,
  Overlay
} from "./style"



export const Profile = () => {
    
    const {restaurantId}                    = useParams();
    
    
    const [restaurant, setRestaurant]       = useState<Restaurant | null>(null)
    const [modalState, setModalState]       = useState(false)
    const [modalFood, setModalFood]         = useState<number>(0)
    
    
    const getFoodModal = restaurant?.cardapio.find(
        (menu) => menu.id === modalFood)


    
    const handleOpenModal = (id: number) => {
        setModalState(!modalState)
        setModalFood(id)
    }

    const handleCloseModal = () => {
        setModalState(!modalState)
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
                ButtonClickEvent={() => handleOpenModal(menu.id)}
                Title={menu.nome}
                Text={menu.descricao}
                Image={menu.foto}
                Alt={menu.nome}
                />))
        
            }
        </ProfileProductsList>
        )

    const OverlayEffect = () => (
            <Overlay 
                 initial={{ opacity: 0 }}   
                animate={{ opacity: 1 }}     
                exit={{ opacity: 0 }} 
                $activeModal={modalState}
                transition={{ duration: 0.3 }}
                onClick={handleCloseModal}
            />)

    return (
    <>  
        <Header Page="Profile"/>
        <ImageContainer>    
        <img src={FoodPresentation} />
            <ContainerText $activeModal={modalState}>
                <p>Italiana</p>
                <p>La Dolce Vita Trattoria</p>
            </ContainerText>
        </ImageContainer>
        <ContainerProducts $activeModal={modalState}>
        <AnimatePresence>
            {getFoodModal && modalState && (
                <>
                    {OverlayEffect()}
                    <ModalContainer $activeModal={modalState}>
                        <CloseIconDiv>
                            <button onClick={handleCloseModal}>
                                <img src={CloseIcon} alt="Icone de fechar" />
                            </button>
                        </CloseIconDiv>
                        <img className="foodImage" src={getFoodModal?.foto} alt={getFoodModal?.nome}/>
                        <ModalBody>
                            <ModalTitle>{getFoodModal?.nome}</ModalTitle>
                            <ModalText>{getFoodModal?.descricao}</ModalText>
                            <ModalDescription>{getFoodModal?.porcao}</ModalDescription>
                            <ModalButton>Adicionar ao carrinho R$ - {getFoodModal?.preco}</ModalButton>
                        </ModalBody>
                    </ModalContainer>
                </>
                )}
        </AnimatePresence>
        {returnProduct()}
        </ContainerProducts>
        <Bottom />
    </>
) 

}

export default Profile

