import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/facebook (2).png'
import insta from '../../assets/img/insta.png'
import tt from '../../assets/img/twitter.png'
import { BottomContainer, SocialContainer, Text } from './style'


export const Bottom = () => (

    <div>
        <BottomContainer>
        <img src={logo} />
        <SocialContainer>
            <img src={insta} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={tt} alt="twitter" />
        </SocialContainer>
        <Text>
            A efood é uma plataforma para divulgação de estabelecimentos, 
            a responsabilidade pela entrega, qualidade dos produtos é toda do 
            estabelecimento contratado. 
        </Text>
        </BottomContainer>
    </div>

)

export default Bottom