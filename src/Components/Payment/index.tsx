


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
    const { formik, 
            isSucessRequest, 
            isLoading, 
            getOrderId, 
            paymentInformationState, 
            nextStepForm,
            validationSubmit,
            previusStepForm } = usePaymentForm()
  
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
                    formik={formik}
                    isLoading = {isLoading}
                    submitForm={() => validationSubmit()}
                    previusStep={() => previusStepForm()}/>) : 
                    (<PaymentFormAdress 
                    formik={formik}
                    nextStep={() => (nextStepForm())} 
                    previusStep={() => ButtonClick()}/>)}
            </ContainerForm>)
        }
    </>
    )
}

export default Payment