import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { HeaderContainer, Text, TextContainer, BuyText } from './styles'

export type Props = {
    Page: 'Home' | 'Profile'
}

export const Header = ({Page}: Props) => (
       <>
            {Page === 'Home' ? 
            (<HeaderContainer>
                <img src={logo} />
                <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
            </HeaderContainer> ) : ( 
            <HeaderContainer>
                <TextContainer>
                    <Link to="/"><BuyText>Restaurantes</BuyText></Link>
                    <img src={logo} />
                    <BuyText>0 produtos no carrinho</BuyText>
                </TextContainer>
            </HeaderContainer>)
            }
        </>
    
)

export default Header