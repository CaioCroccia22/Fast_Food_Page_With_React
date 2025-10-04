import styled from "styled-components";
import FoodPresentation from '../../assets/img/apresentacao.png'

export const ImageContainer = styled.div`
    width: 100%;
    background-size: cover;
    background-image: url(${FoodPresentation});
    background-repeat: no-repeat;
    background-position: center;
    height: 280px;
    margin-bottom: 20px;
`

export const ProfileProductsList = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    max-width: 70%;
    margin-bottom: 20px;
    gap: 20px;
`