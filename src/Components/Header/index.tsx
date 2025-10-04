import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { HeaderContainer, Title, TextContainer, BuyText } from './styles'

export type Props = {
    Page: 'Home' | 'Profile'
}

export const Header = ({Page}: Props) => (
       <>
            {Page === 'Home' ? 
            (<HeaderContainer Page={Page}>
                <img src={logo} />
                <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
            </HeaderContainer> ) : ( 
            <HeaderContainer Page={Page}>
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