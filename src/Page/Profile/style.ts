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
export const ProfileProductsList = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    width: 1024px;
    margin-bottom: 20px;
    gap: 20px;
`