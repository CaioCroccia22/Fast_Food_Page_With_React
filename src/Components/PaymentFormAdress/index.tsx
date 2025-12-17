import { IMaskInput } from 'react-imask';

import { ContainerAdress } from "./styles"
import { CartButton } from "../../styles"
import type { FormikProps } from 'formik';
import type { Order } from '../../Models/Payment';


type Props = {
    formik: FormikProps<Order>
    nextStep: () => void
    previusStep: () => void
}

export const PaymentFormAdress = ({formik, nextStep, previusStep}: Props) => {

    return (
         <>
            <label htmlFor="receiver">Quem irá receber: </label>
            <input 
                id="receiver" 
                name="delivery.receiver"
                value={formik.values.delivery.receiver}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.touched.delivery?.receiver && formik.errors.delivery?.receiver && 
            (<span style={{color: '#ffff', marginBottom: '8px'}}>{formik.errors.delivery?.receiver}</span>)}

            <label htmlFor="adress">Endereço: </label>
            <input 
                id="adress" 
                name="delivery.adress.description"
                value={formik.values.delivery.adress.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.touched.delivery?.adress?.description && formik.errors.delivery?.adress?.description && 
            (<span style={{color: '#ffff', marginBottom: '8px'}}>{formik.errors.delivery?.adress?.description}</span>)}
            
            <label htmlFor="city">Cidade: </label>
            <input 
                id="city" 
                name="delivery.adress.city"
                value={formik.values.delivery.adress.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

             {formik.touched.delivery?.adress?.city && formik.errors.delivery?.adress?.city && 
            (<span style={{color: '#ffff', marginBottom: '8px'}}>{formik.errors.delivery?.adress?.city}</span>)}
            
            
            <ContainerAdress>
                <div>
                    <label htmlFor="cep">Cep: </label>
                    <IMaskInput 
                        id="cep" 
                        name="delivery.adress.zipCode"
                        value={formik.values.delivery.adress.zipCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        mask="00000-000"
                    />
                </div>

                {formik.touched.delivery?.adress?.zipCode && formik.errors.delivery?.adress?.zipCode && 
                (<span style={{color: '#ffff', marginBottom: '8px'}}>{formik.errors.delivery?.adress?.zipCode}</span>)}

                <div>
                    <label htmlFor="number">Numero: </label>
                    <IMaskInput 
                        id="number" 
                        name="delivery.adress.number"
                        value={formik.values.delivery.adress.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        mask = {Number}
                    />
                </div>

                {formik.touched.delivery?.adress?.number && formik.errors.delivery?.adress?.number && 
                (<span style={{color: '#ffff', marginBottom: '8px'}}>{formik.errors.delivery?.adress?.number}</span>)}


            </ContainerAdress>
            
            <label htmlFor="complement">Complemento: </label>
            <input 
                id="complement" 
                name="delivery.adress.complement"
                value={formik.values.delivery.adress.complement}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.touched.delivery?.adress?.complement && formik.errors.delivery?.adress?.complement && 
            (<span style={{color: '#ffff', marginBottom: '8px'}}>{formik.errors.delivery?.adress?.complement}</span>)}
            
            <CartButton type="button" onClick={() => nextStep()}>
                Continuar com o pagamento
            </CartButton>
            <CartButton type="button" onClick={() => previusStep()}>
                Voltar ao carrinho
            </CartButton>
        </>
    )
}

export default PaymentFormAdress