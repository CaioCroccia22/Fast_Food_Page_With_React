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

