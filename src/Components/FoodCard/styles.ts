import { styled } from "styled-components"

type Props = {
  $activeModal: boolean
}

  export const CloseIconDiv = styled.div`
  
    top: 0;
    right: 0;
    margin: 8px;
    position: absolute;
    width: 16px;
    height: 16px;
  
    button {
      cursor: pointer;
       background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  
    img {
  
      width: 16px;
      height: 16px;
    }
  `
  

export const ModalContainer = styled.div<Props>`
    display: ${(props) => props.$activeModal == true ? `flex` : `none`};
    z-index: ${(props) => props.$activeModal == true ? `99` : `0`};
    align-items: center;
    width: 1024px;
    height: 344px;
    position: absolute;
    background-repeat: no-repeat;
    background-color: #E66767;
    

    .foodImage {
      width: 280px;
      height: 280px;
      object-fit: cover;
      display: flex;
      margin: 32px;
      margin-right: 0px;
    }
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 656px;
  margin: 32px 32px 32px 24px;
`

export const ModalTitle = styled.h3`
    font-size: 18px;
    font-weight: 900px;
    color: #fff;
    margin-bottom: 16px;
`

export const ModalText = styled.p`
  font-size: 14px;
  font-weight: 400px;
  max-width: 624px;
  height: 176px;
  margin-bottom: 16px;
  line-height: 22px;
  color: #fff;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  font-weight: 400px;
  width: 656px;
  height: 176px;
  margin-bottom: 16px;
  color: #fff;

`

export const ModalButton = styled.button`
  width: 218px;
  height: 24px;
  padding: 6px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  justify-content: center
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
`