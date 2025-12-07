import trash from '../../assets/img/lixeira.png'
import exemplo from '../../assets/img/macarrao.png'
import { useCart } from '../../store/Hooks/useCart'
import { parseToBrl } from '../../Utils/parseToBrl'
import { CartContainer, CartOptions, CartOption, CartOptionBody, IconContainer } from './styles'

export const CartMenu = () => {
    const {CartList, removeFoodCart} = useCart()
    return (
        <>
            <CartContainer>
                <CartOptions>
                    {CartList.map(cl => 
                    <CartOption>
                        <img src={cl.foto}/>
                        <CartOptionBody>
                            <h5>{cl.nome}</h5>
                            <p>{parseToBrl(cl.preco)}</p>
                            <IconContainer onClick={() => removeFoodCart(cl.id)}>
                                <img src={trash} alt='Lixeira'/>
                            </IconContainer>
                        </CartOptionBody>
                    </CartOption>

                    )}
                </CartOptions>
            </CartContainer>
        </>
    )
}


export default CartMenu