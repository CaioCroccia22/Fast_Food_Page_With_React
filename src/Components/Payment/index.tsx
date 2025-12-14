import {useState } from "react"
import { ContainerForm } from "./styles"
import { usePaymentForm } from "../../store/Hooks/usePaymentForm"
import PaymentFormAdress from "../PaymentFormAdress"
import PaymentFormCard from "../PaymentFormCard"



// Criar a props para quando ele disse que quer voltar ao carrinho disparar o evento
type Props = {
    ButtonClick: () => void
}

export const Payment = ({ButtonClick}: Props) => {
    const {formik, isSucessRequest, isLoading ,getOrderId } = usePaymentForm()
    const [paymentInformationState, setPaymentInformationaState] = useState(false)
  

    return (
    <>
        <ContainerForm onSubmit={formik.handleSubmit}>
            {paymentInformationState ? (
                <PaymentFormCard
                isLoading = {isLoading}
                previusStep={() => (setPaymentInformationaState(false))}/>) : 
                (<PaymentFormAdress 
                nextStep={() => (setPaymentInformationaState(true))} 
                previusStep={() => ButtonClick()}/>)}
        </ContainerForm>
        {isSucessRequest ?  
            (<> <h3>Order: {getOrderId}</h3>
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