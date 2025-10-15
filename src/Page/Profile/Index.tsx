import { useEffect, useState } from "react"

import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import { ProfileProducts } from "../../Elements/Profile_Products/Index"

import { ImageContainer, ProfileProductsList, ContainerText, ModalContainer, ButtonModal, DescriptionModal, TextModal, TitleModal, ModalBody, CloseIcon } from "./style"

import food from '../../assets/img/food.png'
import CloseIconImage from '../../assets/img/closeIcon.png'
import FoodPresentation from '../../assets/img/macarrao.png'
import MenuCategories from "../../Models/Menu"
import type { MenuInterface } from "../../Models/MenuInterface"




export type menuType = {
    
    Image: [ Source: string, alt: string],
    Title: string,
    Text: string
}

// const menu: MenuCategories[] = [];


export const Profile = () => {
    
    const [ModalState, setModalState] = useState(false)
    const [MenuState, setMenuState] = useState<MenuCategories[]>([])

    const handleModalClick = () => {
        setModalState(!ModalState)
        console.log(ModalState)
    }

    async function carregaDados() {
        try {
          const response = await fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
          if(!response.ok){
            throw new Error("Erro na requisição")
          }

          const data = await response.json();
          const res = createMenus(data);
          console.log(res)
          setMenuState(res)
        }
        catch (error){
            console.log("Erro:", error)
        }
    }

    function createMenus(data: MenuInterface[]){
        return data.map(menu  => new MenuCategories(
            menu.id, 
            menu.titulo, 
            menu.destacado, 
            menu.tipo, 
            menu.avaliacao,
            menu.descricao, 
            menu.capa, 
            menu.cardapio
          )
        )
       }
    

    useEffect(() => {
            carregaDados()
            },
    [ModalState])


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
                
                    {ModalState && (
                        <>
                        <ModalContainer>
                            <CloseIcon>
                                <button onClick={handleModalClick}>
                                    <img src={CloseIconImage}/>
                                </button>
                            </CloseIcon>
                            <img src={food} />
                            <ModalBody>
                                <TitleModal>Pizza Marguerita</TitleModal>
                                <TextModal>A pizza Margherita é uma pizza clássica da culinária 
                                    italiana, reconhecida por sua simplicidade e sabor inigualável.
                                     Ela é feita com uma base de massa fina e crocante, 
                                     coberta com molho de tomate fresco, queijo mussarela de 
                                     alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
                                    A combinação de sabores é perfeita, com o molho de tomate suculento
                                     e ligeiramente ácido, o queijo derretido e cremoso e as folhas de 
                                     manjericão frescas, que adicionam um toque de sabor herbáceo. 
                                     É uma pizza simples, mas deliciosa, que agrada a todos os paladares 
                                     e é uma ótima opção para qualquer ocasião.</TextModal>
                                <DescriptionModal>Serve: de 2 a 3 pessoas</DescriptionModal>
                                <ButtonModal>Adicionar ao carrinho - R$ 60,90</ButtonModal>
                            </ModalBody>
                        </ModalContainer>
                        </>
                    )}
            </ProfileProductsList>
        <Bottom />
    </>
) }

export default Profile