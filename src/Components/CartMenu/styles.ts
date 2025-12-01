import styled from "styled-components";

export const CartContainer = styled.aside`
    background-color: #E66767;
    width: 360px;
    height: 100vh;
    right: 0;
    top: 0;
    position: absolute;
`

export const CartOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 32px 8px 40px 8px;
`

export const CartOption = styled.div`
    display: flex;
    background-color: #FFEBD9;
    width: 344px;
    height: 100px;
    margin-bottom: 16px;
    

    img:nth-child(1){
        width: 80px;
        height: 80px;
    }
`