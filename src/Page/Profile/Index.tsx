import { useState } from "react"
import { useParams } from "react-router"
import { AnimatePresence } from "framer-motion"


import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"


import { 
  ProfileProductsList, 
  ContainerProducts,
  ContainerMenu,
  ContainerMenuImage,
  TitleMenu,
  TextMenu,
  ContainerMenuButton,
  BuyButton

} from "./style"

import { useGetMenuQuery } from "../../API/Api"
import FoodCard from "../../Components/FoodCard/Index"
import CartMenu from "../../Components/CartMenu"
import { useCart } from "../../store/Hooks/useCart"
import Hero from "../../Components/Hero"
import OverlayEffect from "../../Components/OverlayEffect"
import type { Menu } from "../../Models/Menu"



export const Profile = () => {
    
    const {restaurantId}                    = useParams();
    const { data: restaurant }              = useGetMenuQuery(restaurantId as string)
    const [modalState, setModalState]       = useState(false)
    const [modalFood, setModalFood]         = useState({} as Menu)
    const {Cart, toggleCartMenu}            = useCart()
    
    if(!restaurant){
        return <div>Restaurante não encontrado</div>
    }
    
    const cardapioArray = restaurant.cardapio.slice(0,6)
    


    const handleOpenModal = (food: Menu) => {
        setModalState(!modalState)
        setModalFood(food)
        }

    return (
    <> 
        {/* Carrinho */}
        {Cart && (<><div onClick={() => toggleCartMenu()}><OverlayEffect/></div><CartMenu /></>)}
        <Header Page="Profile"/>
        <Hero />
        <ContainerProducts $activeModal={modalState}>
        {/* Modal */}
        {modalState && <><div onClick={() => setModalState(!modalState)}><OverlayEffect /></div>
                    <AnimatePresence>
                            <FoodCard 
                                buttoClickEvent={() => setModalState(!modalState)} 
                                food={modalFood} 
                                modalState={modalState}/>
                    </AnimatePresence>
                </>}
        <ProfileProductsList>
        {cardapioArray.map(c => 
            <>
                <ContainerMenu>
                    <ContainerMenuImage>
                        <img src={c.foto} alt={c.nome}/>
                    </ContainerMenuImage>
                    <TitleMenu>
                        <h3>{c.nome}</h3>
                    </TitleMenu>
                    <TextMenu>
                        <p>
                            {c.descricao.length > 153 ? (`${c.descricao.slice(0, 150)}...`): (c.descricao)}
                        </p>
                    </TextMenu>
                    <ContainerMenuButton>
                        <BuyButton onClick={() => handleOpenModal(c)}>Mais detalhes</BuyButton>
                    </ContainerMenuButton>
                </ContainerMenu>
            </>)}
        </ProfileProductsList>
        </ContainerProducts>
        <Bottom /> 
    </>
            )
}

export default Profile

