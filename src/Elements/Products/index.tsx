import { ImageInfos, ProductContainer, TagContainer,FoodInfos, Button, ContainerInfos } from "./style"
import food from '../../assets/img/food.png'
import star from '../../assets/img/estrela.png'

export const Product = () => (
    <ProductContainer>
        <ImageInfos>
            <img src={food} />
            <TagContainer>
                <p>Destaque da Semana</p>
                <p>Japonesa</p>
            </TagContainer>
        </ImageInfos>
        <FoodInfos>
            <ContainerInfos>
                <h3>Hioki Sushi</h3>
                <div><span>4.9</span><img src={star} alt="nota" /></div>
            </ContainerInfos>
                <p>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! 
                    Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                    Entrega rápida, embalagens cuidadosas e qualidade garantida.
                    Experimente o Japão sem sair do lar com nosso delivery!
                </p>
            <Button>Saiba Mais</Button>
        </FoodInfos>
    </ProductContainer>
)

export default Product