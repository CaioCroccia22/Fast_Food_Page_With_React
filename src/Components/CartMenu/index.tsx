import trash from '../../assets/img/lixeira.png'
import exemplo from '../../assets/img/macarrao.png'
import { CartContainer, CartOptions, CartOption, CartOptionBody, IconContainer } from './styles'

export const CartMenu = () => {
    return (
        <>
            <CartContainer>
                <CartOptions>
                    <CartOption>
                        <img src={exemplo}/>
                        <CartOptionBody>
                            <h5>Nome</h5>
                            <p>R$ 60,90</p>
                            <IconContainer>
                                <img src={trash} alt='Lixeira'/>
                            </IconContainer>
                        </CartOptionBody>
                    </CartOption>
                    <CartOption>
                        <img src={exemplo}/>
                        <CartOptionBody>
                            <h5>Nome</h5>
                            <p>R$ 60,90</p>
                            <IconContainer>
                                <img src={trash} alt='Lixeira'/>
                            </IconContainer>
                        </CartOptionBody>
                    </CartOption>
                </CartOptions>
            </CartContainer>
        </>
    )
}


export default CartMenu