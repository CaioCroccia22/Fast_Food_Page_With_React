import { useState } from 'react'
import trash from '../../assets/img/lixeira.png'
import { useCart } from '../../store/Hooks/useCart'
import { parseToBrl } from '../../Utils/parseToBrl'
import { ContainerAside, CartOptions, CartOption, CartOptionBody, ContainerIcon, ContainerPaymentText } from './styles'
import Payment from '../Payment'
import { CartButton } from '../../styles'

export const CartMenu = () => {
    const [PaymentState, SetPaymentState] = useState(false)
    const {CartList, removeFoodCart, sumCartFood} = useCart()
    
    function tooglePayment(){
        console.log(PaymentState)
        if(!PaymentState){
            SetPaymentState(!PaymentState)
            console.log("Vou abrir o menu de pagamento: " + {PaymentState})
        } else {
            SetPaymentState(!PaymentState)
            console.log("Vou fechar o menu de pagamento: " + {PaymentState})
        }
    }

    return (
        <>
            <ContainerAside className={CartList.length > 5 ? ('overflow') : ('')}>
                {!PaymentState ? (<CartOptions>
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
                <CartButton onClick={() => tooglePayment()}>
                    Continuar com a entrega
                </CartButton>
                </CartOptions>) 
                : (<Payment ButtonClick={tooglePayment}/>)}
            </ContainerAside>
        </>
    )
}


export default CartMenu