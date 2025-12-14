import { usePaymentForm } from "../../store/Hooks/usePaymentForm"
import { ContainerAdress } from "./styles"
import { CartButton } from "../../styles"

type Props = {
    nextStep: () => void
    previusStep: () => void
}

export const PaymentFormAdress = ({nextStep, previusStep}: Props) => {

    const {formik} = usePaymentForm()

    return (
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