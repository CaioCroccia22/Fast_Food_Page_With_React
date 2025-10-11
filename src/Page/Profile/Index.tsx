import Bottom from "../../Components/Bottom"
import Header from "../../Components/Header"
import food from '../../assets/img/food.png'
import { ProfileProducts } from "../../Elements/Profile_Products/Index"
import { ImageContainer, ProfileProductsList, ContainerText } from "./style"
import FoodPresentation from '../../assets/img/macarrao.png'
import { useState } from "react"
import { link } from "fs"


export type menuType = {
    
    Image: [ Source: string, alt: string],
    Title: string,
    Text: string
}

const menu: menuType[] = [
    {
    Image: [
        `${food}`,
        'Imagem da comida'
    ],
    Title: 'Hioki Sushi',
    Text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
    },
    {
    Image: [
         `${food}`,
        'Imagem da comida'
    ],
    Title: 'Hioki Sushi',
    Text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
    },
    {
    Image: [
        `${food}`,
        'Imagem da comida'
    ],
    Title: 'Hioki Sushi',
    Text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
    },

]
export const Profile = () => {
    
    const [ModalState, setModalState] = useState(false)

    const handleModalClick = () => {
        setModalState(!ModalState)
        console.log(ModalState)
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
                {menu.map(item => {
                    return <ProfileProducts 
                            Title={item.Title}
                            Image={item.Image[0]}
                            Alt={item.Image[1]}
                            Text={item.Text}
                             />
                })}
            </ProfileProductsList>
        <Bottom />
    </>
) }

export default Profile