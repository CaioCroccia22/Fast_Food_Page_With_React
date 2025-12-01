import { useState } from "react"
import { useParams } from "react-router"
import { AnimatePresence } from "framer-motion"


import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
// import { ProfileProducts } from "../../Components/Profile_Products/Index"
import FoodPresentation from '../../assets/img/macarrao.png'


import { 
  ImageContainer, 
  ProfileProductsList, 
  ContainerText, 
  ContainerProducts,
  Overlay
//   Overlay
} from "./style"
// import { parseToBrl } from "../../Utils/parseToBrl"
import { useGetMenuQuery } from "../../API/Api"
import { ProfileProducts } from "../../Components/Profile_Products/Index"
import FoodCard from "../../Components/FoodCard/Index"
import CartMenu from "../../Components/CartMenu/Index"



export const Profile = () => {
    
    const {restaurantId}                    = useParams();
    const { data: restaurant } = useGetMenuQuery(restaurantId as string)
    const [modalState, setModalState]       = useState(false)
    const [modalFood, setModalFood]         = useState<number>(0)


    if(!restaurant){
        return <div>Restaurante não encontrado</div>
    }
    
    const cardapioArray = restaurant.cardapio.slice(0,6)
    


    const handleOpenModal = (id: number) => {
        setModalState(!modalState)
        setModalFood(id)
    }

    const handleCloseModal = () => {
        setModalState(!modalState)
    }

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
    {/* Aqui vai ter que consultar Cart se for true renderiza o component cardMenu*/}
        {modalState ? OverlayEffect() : ''}
        <Header Page="Profile"/>
        <ImageContainer>    
        <img src={FoodPresentation} />
            <ContainerText $activeModal={modalState}>
                <p>Italiana</p>
                <p>La Dolce Vita Trattoria</p>
            </ContainerText>
        </ImageContainer>
        <CartMenu />
        <ContainerProducts $activeModal={modalState}>
        {cardapioArray.map(c => 
            <>
                <AnimatePresence>
                {modalState ? <FoodCard foodId={c.id} food={c} modalState={modalState}></FoodCard> : ''}
                    </AnimatePresence>
                    <ProfileProductsList>
                                <ProfileProducts
                                    key={c.id}
                                    ButtonClickEvent={() => handleOpenModal(c.id)}
                                    Title={c.nome}
                                    Text={c.descricao}
                                    Image={c.foto}
                                    Alt={c.nome}
                                />
                    </ProfileProductsList>
            </>)}
        </ContainerProducts>
        <Bottom /> 
    </>
            )
}

export default Profile

