import trash from '../../assets/img/lixeira.png'
import { useCart } from '../../store/Hooks/useCart'
import { parseToBrl } from '../../Utils/parseToBrl'
import { ContainerAside, CartOptions, CartOption, CartOptionBody, ContainerIcon, ContainerPaymentText } from './styles'
import Payment from '../Payment'
import { CartButton } from '../../styles'

export const CartMenu = () => {
    const {CartList,  startToPay, removeFoodCart, sumCartFood, confirmCart} = useCart()
    
    return (
        <>
            <ContainerAside className={CartList.length > 5 ? ('overflow') : ('')}>
                {!startToPay ? (<CartOptions>
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
                    </CartOption>)}
                <ContainerPaymentText>
                    <p>Valor total</p>
                    <p>R$ {sumCartFood().toFixed(2)}</p>
                </ContainerPaymentText>
                <CartButton onClick={() => confirmCart(CartList)}>
                    Continuar com a entrega
                </CartButton>
                </CartOptions>) : (<Payment ButtonClick={() => startToPay}/>)}
            </ContainerAside>
        </>
    )
}


export default CartMenu