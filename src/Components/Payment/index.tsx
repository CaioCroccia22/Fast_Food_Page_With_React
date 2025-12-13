import {useState } from "react"
import { CartButton } from "../../styles"
import { ContainerForm, ContainerAdress, ContainerCard } from "./styles"
import { usePaymentForm } from "../../store/Hooks/usePaymentForm"



// Criar a props para quando ele disse que quer voltar ao carrinho disparar o evento
type Props = {
    ButtonClick: () => void
}

export const Payment = ({ButtonClick}: Props) => {
    const {formik, isSucessRequest, isError ,getData } = usePaymentForm()
    const [paymentInformationState, setPaymentInformationaState] = useState(false)
  

    return (
    <>
        <ContainerForm onSubmit={formik.handleSubmit}>
                {paymentInformationState ? (
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
                        
                        <CartButton type='submit'>
                            Finalizar pagamento
                        </CartButton>
                        <CartButton type="button" onClick={() => setPaymentInformationaState(!paymentInformationState)}>
                            Voltar para a edição de endereço
                        </CartButton>
                    </>
                ) : (
                    <>
                        <label htmlFor="receiver">Quem irá receber: </label>
                        <input 
                            id="receiver" 
                            name="delivery.receiver"
                            value={formik.values.delivery.receiver}
                            onChange={formik.handleChange}
                        />
                        
                        <label htmlFor="adress">Endereço: </label>
                        <input 
                            id="adress" 
                            name="delivery.adress.description"
                            value={formik.values.delivery.adress.description}
                            onChange={formik.handleChange}
                        />
                        
                        <label htmlFor="city">Cidade: </label>
                        <input 
                            id="city" 
                            name="delivery.adress.city"
                            value={formik.values.delivery.adress.city}
                            onChange={formik.handleChange}
                        />
                        
                        <ContainerAdress>
                            <div>
                                <label htmlFor="cep">Cep: </label>
                                <input 
                                    id="cep" 
                                    name="delivery.adress.zipCode"
                                    value={formik.values.delivery.adress.zipCode}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="number">Numero: </label>
                                <input 
                                    id="number" 
                                    name="delivery.adress.number"
                                    value={formik.values.delivery.adress.number}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </ContainerAdress>
                        
                        <label htmlFor="complement">Complemento: </label>
                        <input 
                            id="complement" 
                            name="delivery.adress.complement"
                            value={formik.values.delivery.adress.complement}
                            onChange={formik.handleChange}
                        />
                        
                        <CartButton type="button" onClick={() => setPaymentInformationaState(!paymentInformationState)}>
                            Continuar com o pagamento
                        </CartButton>
                        <CartButton type="button" onClick={() => ButtonClick()}>
                            Voltar ao carrinho
                        </CartButton>
                    </>
                )}
        </ContainerForm>
        {isSucessRequest ?  
            (<> <h3>Order: {getData}</h3>
            <p> Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p></>) : 
            (<></>)
        }
    </>
    )
}

export default Payment