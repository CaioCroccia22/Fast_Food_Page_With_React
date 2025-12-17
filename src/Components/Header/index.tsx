import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { HeaderContainer, Title, TextContainer, BuyText } from './styles'
import { useCart } from '../../store/Hooks/useCart'

export type Props = {
    page: 'Home' | 'Profile'
}

export const Header = ({page}: Props) => {
    const { toggleCartMenu, CartList } = useCart()

    return (<>
            {page === 'Home' ? 
            (<HeaderContainer page={page}>
                <img src={logo} />
                <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
            </HeaderContainer> ) : ( 
            <HeaderContainer page={page}>
                <TextContainer>
                    <Link to="/"><BuyText>Restaurantes</BuyText></Link>
                    <img src={logo} />
                    <BuyText onClick={() => toggleCartMenu()}>{CartList.length} produtos no carrinho</BuyText>
                </TextContainer>
            </HeaderContainer>)
            }
        </>)

}

export default Header