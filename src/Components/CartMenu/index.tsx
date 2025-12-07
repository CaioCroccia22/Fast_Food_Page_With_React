import trash from '../../assets/img/lixeira.png'
import { useCart } from '../../store/Hooks/useCart'
import { parseToBrl } from '../../Utils/parseToBrl'
import { CartContainer, CartOptions, CartOption, CartOptionBody, ContainerIcon, ContainerPaymentText, PaymentButton } from './styles'

export const CartMenu = () => {
    const {CartList, removeFoodCart, sumCartFood} = useCart()

    

    return (
        <>
            <CartContainer className={CartList.length > 5 ? ('overflow') : ('')}>
                <CartOptions>
                    {CartList.map(cl => 
                    <CartOption key={cl.id}>
                        <img src={cl.foto}/>
                        <CartOptionBody>
                            <h5>{cl.nome}</h5>
                            <p>{parseToBrl(cl.preco)}</p>
                            <ContainerIcon onClick={() => removeFoodCart(cl.id)}>
                                <img src={trash} alt='Lixeira'/>
                            </ContainerIcon>
                        </CartOptionBody>
                    </CartOption>

                    )}
                <ContainerPaymentText>
                    <p>Valor total</p>
                    <p>R$ {parseToBrl(sumCartFood())}</p>
                </ContainerPaymentText>
                <PaymentButton>
                    Continuar com a entrega
                </PaymentButton>
                </CartOptions>
            </CartContainer>
        </>
    )
}


export default CartMenu