import { useFormik } from "formik";

import type { Order } from "../../Models/Payment";
import { useCart } from "./useCart";
import { usePostPaymentMutation } from "../../API/Api";
import { useState } from "react";
import { paymentValidationSchema } from "../../Utils/PaymentSchema";
import { toast } from "react-toastify";

export const usePaymentForm = () => {
    const {CartList, cleanCart} = useCart()
    const CartArr: number[][] = CartList.map(item => [item.id, item.preco]);

    const [request, {isSuccess: isSucessRequest, isError: isError, isLoading: isLoading}] = usePostPaymentMutation()
    const [getOrderId, setOrderId] = useState('')

    const [paymentInformationState, setPaymentInformationaState] = useState(false)



    const formik = useFormik<Order>({
                initialValues: {
                products: CartArr,
                delivery: {
                    receiver: '',
                    adress: {
                        description: '',
                        city: '',
                        zipCode: '',
                        number: '',
                        complement: '',
                    }
                },
                payment: {
                    card: {
                        name: '',
                        number: '',
                        code: '',
                        expires: {
                            month: '',
                            year: ''
                        }
    
                    }
                }
            },
            validationSchema: paymentValidationSchema,
            onSubmit: (async (values) => {
                try {
                        toast.success('Pedido realizado aguarde um momento')
                        const response = await request(values).unwrap()
                         setOrderId(response.orderId)
                         cleanCart()
                    } catch(error){
                        toast.error(`Erro no pagamento: ${error}`, 
                        {position: "top-center", closeOnClick: true})
                    }
                })
        })

        // Validação da primeira parte do formulário
        async function nextStepForm(){

                formik.setTouched({
                    delivery: {
                        receiver: true,
                        adress: {
                            description: true,
                            city: true,
                            zipCode: true,
                            number: true,
                            complement: true
                        }
                    }
                });

                const errors = await formik.validateForm();

                const hasReceiverError = errors.delivery?.receiver;
                const hasAddressError = errors.delivery?.adress;
            
                if (hasReceiverError || hasAddressError){
                    toast.error("Preencha todos os campos de endereço", 
                        {position: "top-center", closeOnClick: true})
                } else {
                    setPaymentInformationaState(true)
                }
            
            }
        
        async function validationSubmit(){
            const errors = await formik.validateForm()

            const hasCardErrors = errors.payment?.card

            if (hasCardErrors){
                console.log(hasCardErrors)
                toast.error(`Preencha todos os campos de pagamento`, 
                    {position: "top-center", closeOnClick: true})
            } else {
                    formik.submitForm()
                }
        }

        function previusStepForm(){
            setPaymentInformationaState(false)
        }


        return {formik, isSucessRequest, isError, isLoading ,getOrderId, nextStepForm, previusStepForm, validationSubmit,paymentInformationState}
    
}