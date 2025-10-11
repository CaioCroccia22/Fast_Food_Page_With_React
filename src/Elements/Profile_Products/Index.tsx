import { Container, TitleProduct, ContainerText, BuyButton} from './style'

export type Props = {
    getModalState: boolean
    onModalClick: () => void
    Text: string
    Image: string
    Alt: string
    Title: string
}

export const ProfileProducts = ({onModalClick, Text, Image, Alt, Title}: Props) => {

    return (
        <Container>
            <img src={`${Image}`} alt={`${Alt}`}/>
            <ContainerText>
            <TitleProduct>{Title}</TitleProduct>
                <p>{Text}</p>
                <BuyButton onClick={onModalClick}>Adicionar ao Carrinho</BuyButton>
            </ContainerText>
        </Container>
)}