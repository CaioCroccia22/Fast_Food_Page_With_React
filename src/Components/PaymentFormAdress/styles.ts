import { styled } from "styled-components";


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