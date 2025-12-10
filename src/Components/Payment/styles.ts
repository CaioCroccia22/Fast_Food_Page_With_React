import { styled } from "styled-components";


export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 32px 8px 40px 8px;
    width: 345px;
    height: 347px;
    color: #FFEBD9;

    &>label{
        justify-content: start;
    }

    input{
        width: 344px;
        height: 32px;
        background-color: #FFEBD9;
        color: black;
        border: none;
        margin-bottom: 8px;
    }

    #complement{
        margin-bottom: 24px;
    }
`

export const ContainerAdress = styled.div`
    display: flex;
    width: 344px;
    height: 56px;

    div{
        display: flex;
        flex-direction: column;
        width: 155px;
        
        &>input{
            gap: 34px;
            width: 155px;
        }
    }

    div:nth-child(2){
        margin-left: 34px;
    }

`

export const ContainerCard = styled.div`
    display: flex;

    #cardNumber {
        width: 228px;
        height: 32px;
    }

    #cvv {
        width: 87px;
        height: 32px;
    }

    #cardYear{
        width: 155px;
        height: 32px;
        margin-bottom: 24px;
    }

    #cardMonth{
        width: 155px;
        height: 32px;
        margin-bottom: 24px;
    }
`