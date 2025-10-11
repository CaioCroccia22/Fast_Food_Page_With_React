import { ImageInfos, ProductContainer, ContainerText, SubTitle, ContainerRate ,TagContainer,FoodInfos, Button, ContainerInfos } from "./style"
import star from '../../assets/img/estrela.png'
import { Tag } from "../Tag/Index"
import { Link } from "react-router-dom"
import food from '../../assets/img/food.png'

export type Props = {
    Tags: string[]
    Len?: number
}

export const Product = ({Tags}: Props) => (
    <ProductContainer>
        <ImageInfos>
            <img src={food} />
            <TagContainer Len={Tags.length}>
                {Tags.map((tag, index)  => (
                    <Tag key={index} word={tag}></Tag>
                ))}
            </TagContainer>
        </ImageInfos>
        <FoodInfos>
            <ContainerInfos>
                <SubTitle>Hioki Sushi</SubTitle>
                <ContainerRate><span>4.9</span><img src={star} alt="nota" /></ContainerRate>
            </ContainerInfos>
            <ContainerText>
                <p>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! 
                    Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                    Entrega rápida, embalagens cuidadosas e qualidade garantida.
                    Experimente o Japão sem sair do lar com nosso delivery!
                </p>
            </ContainerText>
            <Link to="/Profile">
                <Button>
                    Saiba Mais
                </Button>
            </Link>
        </FoodInfos>
    </ProductContainer>
)

export default Product