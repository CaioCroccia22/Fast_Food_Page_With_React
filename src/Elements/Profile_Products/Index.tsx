import Pizza from '../../assets/img/pizza.png'
import { Container, Title, ContainerText, BuyButton } from './style'

export const ProfileProducts = () => (
    <Container>
        <img src={Pizza} alt='Imagem de pizza'/>
        <ContainerText>
            <Title>Pizza Marguerita</Title>
            <p>
                A clássica Marguerita: molho de tomate suculento, mussarela derretida, 
                manjericão fresco e um toque de azeite. Sabor e simplicidade!
            </p>
            <BuyButton>Adicionar ao Carrinho</BuyButton>
        </ContainerText>
    </Container>
)