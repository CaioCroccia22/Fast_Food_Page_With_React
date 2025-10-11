import styled from "styled-components";


export const Container = styled.div`
    background-color: #E66767;
    width: 320px;
    height: 338px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 304px;
        height: 167px;
    }
`

export const TitleProduct = styled.h3`
    color:  #FFEBD9;
    font-weight: 900px;
`

export const ContainerText = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    width: 100%; 

    p{
        color:  #FFEBD9;
        font-weight: 400px;
        line-height: 22px;
        font-size: 14px;
        margin-bottom: 5px;
    }
`

export const BuyButton = styled.button`
    width: 304px;
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    padding: 6px;
    cursor: pointer;
`

export const ContainerImg = styled.div`
    width: 1024px;
    height: 344px;
    background-color: #E66767;
    object-fit: cover;
    display: flex;
    align-itens: center;
    justify-content: center;
    position: absolute;
    z-index: 2;

    &::after{
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: red;
        position: absolute;
        opacity: 0.5;
    }
`
