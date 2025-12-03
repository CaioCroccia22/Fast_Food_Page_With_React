import styled from "styled-components";

export const CartContainer = styled.aside`
    background-color: #E66767;
    width: 360px;
    height: 100vh;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 99;
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
    padding: 8px 8px 12px 8px;
    

    > img{
        width: 80px;
        height: 80px;
    }

`

export const CartOptionBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 8px;


    h5{
        font-size: 18px;
        font-weight: bold;
        color: #E66767;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        // font-weight: 400px;
        color: #E66767;
        margin-bottom: 9px;
    }

`

export const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    img {
        width: 16px;
        height: 16px;
    
    }
`