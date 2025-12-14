import { useFormik } from "formik";

import type { Order } from "../../Models/Payment";
import { useCart } from "./useCart";
import { usePostPaymentMutation } from "../../API/Api";
import { useState } from "react";

export const usePaymentForm = () => {
    const {CartList} = useCart()
    const CartArr: number[][] = CartList.map(item => [item.id, item.preco]);
    const [request, {isSuccess: isSucessRequest, isError: isError, isLoading: isLoading}] = usePostPaymentMutation()
    const [getOrderId, setOrderId] = useState('')



    const formik = useFormik<Order>({
                initialValues: {
                products: CartArr,
                delivery: {
                    receiver: '',
                    adress: {
                        description: '',
                        city: '',
                        zipCode: '',
                        number: 0,
                        complement: '',
                    }
                },
                payment: {
                    card: {
                        name: '',
                        number: '',
                        code: 0,
                        expires: {
                            month: 0,
                            year: 0
                        }
    
                    }
                }
            },
            onSubmit: (async (values) => {
                    try {
                         const response = await request(values).unwrap()
                         setOrderId(response.orderId)
                    } catch(error){
                        console.log('Erro no pagamento', error)
                    }
                })
        })

        return {formik, isSucessRequest, isError, isLoading ,getOrderId}
    
}