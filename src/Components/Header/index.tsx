import logo from '../../assets/img/logo.png'
import { HeaderContainer, Text } from './styles'

export const Header = () => (
    <HeaderContainer>
        <img src={logo} />
        <Text>Viva experiências gastronômicas no conforto da sua casa</Text>
    </HeaderContainer>
)

export default Header