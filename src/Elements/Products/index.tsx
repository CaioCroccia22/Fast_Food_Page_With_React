import { ImageInfos, ProductContainer, ContainerText, SubTitle, ContainerRate ,TagContainer,FoodInfos, Button, ContainerInfos } from "./style"
import star from '../../assets/img/estrela.png'
import { Tag } from "../Tag/Index"
import { Link } from "react-router-dom"
import type { Restaurant } from "../../Models/Restaurant"

export type Props = {
    Tags: string[]
    Len?: number
    Restaurant: Restaurant
}


export const Product = ({Tags, Restaurant}: Props) => {
    
    
    return (
    <ProductContainer>
            <>
                <ImageInfos>
                <img src={Restaurant.capa} />
                <TagContainer Len={Tags.length}>
                {Tags.map((tag)  => (
                    <Tag key={tag} word={tag}></Tag>
                ))}
                </TagContainer>
                </ImageInfos>
                <FoodInfos key={Restaurant.id}>
                    <ContainerInfos>
                        <SubTitle>{Restaurant.titulo}</SubTitle>
                        <ContainerRate><span>{Restaurant.avaliacao}</span><img src={star} alt="nota" /></ContainerRate>
                    </ContainerInfos>
                    <ContainerText>
                        <p> {Restaurant.descricao}</p>
                    </ContainerText>
                    <Link to={`/Profile/${Restaurant.id}`}>
                        <Button>
                            Saiba Mais
                        </Button>
                    </Link>
                </FoodInfos>
            </>
    </ProductContainer>
)}

export default Product