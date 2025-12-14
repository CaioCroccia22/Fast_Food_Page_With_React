import { usePaymentForm } from "../../store/Hooks/usePaymentForm"
import { CartButton } from "../../styles"
import { ContainerCard } from "./styles"

type Props = { 
    isLoading: boolean
    previusStep: () => void
}

export const PaymentFormCard = ({isLoading, previusStep}: Props) => {
    const {formik} = usePaymentForm()

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
                    <input 
                        id="cardNumber" 
                        name="payment.card.number"
                        value={formik.values.payment.card.number}
                        onChange={formik.handleChange}
                    />                       
                </div>
                <div>
                    <label htmlFor="cvv">CVV: </label>
                    <input 
                        id="cvv" 
                        name="payment.card.code"
                        value={formik.values.payment.card.code}
                        onChange={formik.handleChange}
                    />
                </div>
            </ContainerCard>
            
            <ContainerCard>
                <div>
                    <label htmlFor="cardMonth">Mês de vencimento: </label>
                    <input 
                        id="cardMonth" 
                        name="payment.card.expires.month"
                        value={formik.values.payment.card.expires.month}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="cardYear">Ano de Vencimento: </label>
                    <input 
                        id="cardYear" 
                        name="payment.card.expires.year"
                        value={formik.values.payment.card.expires.year}
                        onChange={formik.handleChange}
                    />
                </div>
            </ContainerCard>
            <CartButton type='submit' disabled={isLoading}>
                {isLoading ? 'Processando' : 'Finaliza Pagamento'}
            </CartButton>
            <CartButton type="button" onClick={() => previusStep()}>
                Voltar para a edição de endereço
            </CartButton>
        </>
    )

}

export default PaymentFormCard