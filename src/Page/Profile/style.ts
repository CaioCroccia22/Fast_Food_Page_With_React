import styled from "styled-components";


export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
  }


  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.56;
    z-index: 0;
  }
`;

export const ContainerText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1200px;
  height: 200px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: start;
  margin-left: 250px;
  margin-top: 20px;
  margin-bottom: 20px;     
  color: #fff;

  p:nth-child(1) {
    font-weight: 100;
    font-size: 32px;
  }

  p:nth-child(2) {
    font-weight: 900;
    font-size: 32px;
  }
`;

// export const ContainerProducts = styled.div`
//   background-color: yellow;
//   width: 1024px;
//   display: flex;
//   justify-content: center;
//   margin: 0 auto;
// `


// export const ProfileProductsList = styled.div`
//     align-itens: center;
//     width: 1024px;
//     height: 708px;
//     display: grid;
//     grid-template-columns: 33.3333% 33.3333% 33.3333%;
//     background-color: red;
// `

export const ContainerProducts = styled.div`
  width: 1024px;
  margin: 0 auto;
  // background-color: yellow;
`

export const ProfileProductsList = styled.div`
  width: 1024px;
  height: 708px;
  display: grid;
  grid-template-columns: repeat(3, 353px);
  // background-color: red;
`

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    width: 1004px;
    height: 344px;
    position: absolute;
    background-repeat: no-repeat;
    background-color: #E66767;
    padding: 32px;
    

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      display: flex;
      
    }
`

export const CloseIcon = styled.div`

  top: 0;
  right: 0;
  margin: 8px;
  position: absolute;

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

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 656px;
  margin-left: 32px;
`

export const TitleModal = styled.h3`
    font-size: 18px;
    font-weight: 900px;
    color: #fff;
    margin-bottom: 16px;
`

export const TextModal = styled.p`
  font-size: 14px;
  font-weight: 400px;
  max-width: 624px;
  height: 176px;
  margin-bottom: 10px;
  color: #fff;
`

export const DescriptionModal = styled.p`
  font-size: 14px;
  font-weight: 400px;
  width: 656px;
  height: 176px;
  margin-bottom: 16px;
  color: #fff;

`

export const ButtonModal = styled.button`
  width: 218px;
  height: 24px;
  padding: 6px;
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  align-items: center;
  cursor: pointer;
`