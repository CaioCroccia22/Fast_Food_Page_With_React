import FoodPresentation from '../../assets/img/macarrao.png'
import { HeroContainer, HeroText } from './styles'

export const Hero = () => {
    return (
        <HeroContainer>    
            <img src={FoodPresentation} />
                <HeroText>
                    <p>Italiana</p>
                    <p>La Dolce Vita Trattoria</p>
                </HeroText>
        </HeroContainer>
    )
}

export default Hero