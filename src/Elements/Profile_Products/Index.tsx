import { Container, ContainerImage, ContainerText, BuyButton, ContainerButton, ContainerTitle} from './style'

export type Props = {
    // getModalState: boolean
    ButtonClickEvent: () => void
    Text: string
    Image: string
    Alt: string
    Title: string
}

export const ProfileProducts = ({ButtonClickEvent, Text, Image, Alt, Title}: Props) => {

    return (
        <Container>
            <ContainerImage>
                <img src={Image} alt={Alt}/>
            </ContainerImage>
            <ContainerTitle>
                <h3>{Title}</h3>
            </ContainerTitle>
            <ContainerText>
                <p>
                    {Text.length > 153 ? (`${Text.slice(0, 150)}...`): (Text)}
                </p>
            </ContainerText>
            <ContainerButton>
                <BuyButton onClick={ButtonClickEvent}>Adicionar ao Carrinho</BuyButton>
            </ContainerButton>
        </Container>
)}