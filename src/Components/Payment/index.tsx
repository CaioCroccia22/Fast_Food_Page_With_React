

import {useEffect, useState } from "react"
import { ContainerForm } from "./styles"
import { usePaymentForm } from "../../store/Hooks/usePaymentForm"
import PaymentFormAdress from "../PaymentFormAdress"
import PaymentFormCard from "../PaymentFormCard"
import ConfirmOrder from "../ConfirmOrder"
import { Loader } from "../Loader"



// Criar a props para quando ele disse que quer voltar ao carrinho disparar o evento
type Props = {
    ButtonClick: () => void
}

export const Payment = ({ButtonClick}: Props) => {
    const {formik, isSucessRequest, isLoading, getOrderId } = usePaymentForm()
    const [paymentInformationState, setPaymentInformationaState] = useState(false)
  
    if (isLoading){
        return <Loader />
    }

    return (
        <>
        {isSucessRequest ?  
                (<ConfirmOrder OrderId={getOrderId}/>) :
                (<ContainerForm onSubmit={formik.handleSubmit}>
                {paymentInformationState ? (
                    <PaymentFormCard
                    isLoading = {isLoading}
                    previusStep={() => (setPaymentInformationaState(false))}/>) : 
                    (<PaymentFormAdress 
                    nextStep={() => (setPaymentInformationaState(true))} 
                    previusStep={() => ButtonClick()}/>)}
            </ContainerForm>)
        }
    </>
    )
}

export default Payment