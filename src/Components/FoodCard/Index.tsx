import { CloseIconDiv, ModalBody, ModalButton, ModalContainer, ModalDescription, ModalText, ModalTitle, } from "./styles"
import CloseIcon from "../../assets/img/closeIcon.png"
import type { Menu } from "../../Models/Menu"

type Props = {
    food: Menu
    modalState: boolean
    buttoClickEvent: () => void

}

export const FoodCard = ({food, modalState, buttoClickEvent}: Props) => {
    return (
        <>
            <ModalContainer activeModal={modalState}>
                        <CloseIconDiv>
                            <button onClick={buttoClickEvent}>
                                <img src={CloseIcon} alt="Icone de fechar" />
                            </button>
                        </CloseIconDiv>
                        <img className="foodImage" src={food.foto} alt={food.nome}/>
                        <ModalBody>
                            <ModalTitle>{food.nome}</ModalTitle>
                            <ModalText>{food.descricao}</ModalText>
                            <ModalDescription>{food.porcao}</ModalDescription>
                            <ModalButton>Adicionar ao carrinho R$ - {food.preco}</ModalButton>
                        </ModalBody>
                    </ModalContainer>
        </>
    )
}

export default FoodCard