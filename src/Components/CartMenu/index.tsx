import trash from '../../assets/img/lixeira.png'
import exemplo from '../../assets/img/macarrao.png'
import { CartContainer, CartOptions, CartOption } from './styles'

export const CartMenu = () => {
    return (
        <>
            <CartContainer>
                <CartOptions>
                    <CartOption>
                        <img src={exemplo}/>
                        <h5>Nome</h5>
                        <h6>R$ 60</h6>
                        <img src={trash} alt='Lixeira'/>
                    </CartOption>
                    <CartOption>
                        <img src={exemplo}/>
                        <h5>Nome</h5>
                        <h6>R$ 60</h6>
                        <img src={trash} alt='Lixeira'/>
                    </CartOption>
                </CartOptions>
            </CartContainer>
        </>
    )
}


export default CartMenu