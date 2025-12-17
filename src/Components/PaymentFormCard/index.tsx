import { IMaskInput } from 'react-imask';

import { CartButton } from "../../styles"
import { ContainerCard } from "./styles"
import type { FormikProps } from 'formik';
import type { Order } from '../../Models/Payment';

type Props = { 
    formik:         FormikProps<Order>
    isLoading:      boolean
    previusStep:    () => void
    submitForm:     () => void
}

export const PaymentFormCard = ({formik, submitForm, isLoading, previusStep}: Props) => {


    return (
          <>
            <label htmlFor="cardName">Nome do Cartão: </label>
            <input 
                id="cardName" 
                name="payment.card.name"
                value={formik.values.payment.card.name}
                onChange={formik.handleChange} 
            />
            
            <ContainerCard>
                <div>
                    <label htmlFor="cardNumber">Número do Cartão: </label>
                    <IMaskInput 
                        id="cardNumber" 
                        name="payment.card.number"
                        value={formik.values.payment.card.number}
                        onChange={formik.handleChange}
                        mask={Number}
                    />                       
                </div>
                <div>
                    <label htmlFor="cvv">CVV: </label>
                    <IMaskInput 
                        id="cvv" 
                        name="payment.card.code"
                        value={formik.values.payment.card.code}
                        onChange={formik.handleChange}
                        mask="000"
                    />
                </div>
            </ContainerCard>
            
            <ContainerCard>
                <div>
                    <label htmlFor="cardMonth">Mês de vencimento: </label>
                    <IMaskInput 
                        id="cardMonth" 
                        name="payment.card.expires.month"
                        value={formik.values.payment.card.expires.month}
                        onChange={formik.handleChange}
                        mask="00"
                        min={1}
                        max={12}
                    />
                </div>
                <div>
                    <label htmlFor="cardYear">Ano de Vencimento: </label>
                    <IMaskInput 
                        id="cardYear" 
                        name="payment.card.expires.year"
                        value={formik.values.payment.card.expires.year}
                        onChange={formik.handleChange}
                        mask="0000"
                    />
                </div>
            </ContainerCard>
            <CartButton type="submit" disabled={isLoading} onClick={() => submitForm()}>
                 Finaliza Pagamento
            </CartButton>
            <CartButton type="button" onClick={() => previusStep()}>
                Voltar para a edição de endereço
            </CartButton>
        </>
    )

}

export default PaymentFormCard