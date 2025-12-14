import { useCart } from "../../store/Hooks/useCart"
import { CartButton } from "../../styles"
import { ContainerOrder } from "./styles"

type Props = {
    OrderId: string
}

export const ConfirmOrder = ({OrderId}: Props) => {
    const {toggleCartMenu} = useCart()
    return (
        <ContainerOrder>
            <h3>Pedido realizado - {OrderId}</h3>
            <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, 
                em breve, será entregue no endereço fornecido.
                <br/>
                <br/>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar 
                cobranças extras. 
                <br/>
                <br/>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, 
                garantindo assim sua segurança e bem-estar durante a refeição.
                <br/>
                <br/>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. 
                Bom apetite!
            </p>
            <CartButton onClick={() => (toggleCartMenu())}>
                Concluir
            </CartButton>
        </ContainerOrder>
    )}

export default ConfirmOrder