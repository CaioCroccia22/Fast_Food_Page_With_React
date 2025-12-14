import InputMask from 'react-input-mask';

import { useCart } from "../../store/Hooks/useCart"
import { usePaymentForm } from "../../store/Hooks/usePaymentForm"
import { CartButton } from "../../styles"
import { ContainerCard } from "./styles"

type Props = { 
    isLoading: boolean
    previusStep: () => void
}

export const PaymentFormCard = ({isLoading, previusStep}: Props) => {
    const {formik} = usePaymentForm()
    const {cleanCart} = useCart()

    return (
          <>
            <label htmlFor="cardName">Nome do Cartão: </label>
            <InputMask 
                id="cardName" 
                name="payment.card.name"
                value={formik.values.payment.card.name}
                onChange={formik.handleChange} 
            />
            
            <ContainerCard>
                <div>
                    <label htmlFor="cardNumber">Número do Cartão: </label>
                    <InputMask 
                        id="cardNumber" 
                        name="payment.card.number"
                        value={formik.values.payment.card.number}
                        onChange={formik.handleChange}
                        mask="9999 9999 9999 9999"
                    />                       
                </div>
                <div>
                    <label htmlFor="cvv">CVV: </label>
                    <InputMask 
                        id="cvv" 
                        name="payment.card.code"
                        value={formik.values.payment.card.code}
                        onChange={formik.handleChange}
                        mask="999"
                    />
                </div>
            </ContainerCard>
            
            <ContainerCard>
                <div>
                    <label htmlFor="cardMonth">Mês de vencimento: </label>
                    <InputMask 
                        id="cardMonth" 
                        name="payment.card.expires.month"
                        value={formik.values.payment.card.expires.month}
                        onChange={formik.handleChange}
                        mask="99"
                    />
                </div>
                <div>
                    <label htmlFor="cardYear">Ano de Vencimento: </label>
                    <InputMask 
                        id="cardYear" 
                        name="payment.card.expires.year"
                        value={formik.values.payment.card.expires.year}
                        onChange={formik.handleChange}
                        mask="9999"
                    />
                </div>
            </ContainerCard>
            <CartButton type='submit' disabled={isLoading} onClick={() => cleanCart()}>
                 Finaliza Pagamento
            </CartButton>
            <CartButton type="button" onClick={() => previusStep()}>
                Voltar para a edição de endereço
            </CartButton>
        </>
    )

}

export default PaymentFormCard