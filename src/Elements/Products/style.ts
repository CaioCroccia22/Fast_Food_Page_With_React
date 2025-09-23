import styled from "styled-components";
import type { Props } from ".";

export const ProductContainer = styled.div`
    width: 473px;
    height: 450px;
    display: flex;
    flex-direction: column;
`

export const ImageInfos = styled.div`
    display: flex;
    position: relative;

    img{
        width: 472px;
        height: 217px;
        -webkit-box-shadow: 13px 8px 43px -8px #000000; 
        box-shadow: 13px 8px 43px -8px #000000;
        border-radius: 3px;
    }
`

export const TagContainer = styled.div<Omit<Props,'Tags'>`
    position: absolute;
    display: flex;
    gap: 40px;
    left: ${(props) => props.Len > 1 ? '40px' : '50px' };
`

export const FoodInfos = styled.div`
    border: #E66767 1px solid;
    color: #E66767;
    height: 230px;
    padding: 10px;
`

export const Button = styled.button`
    width: 82px;
    height: 24px;
    font-weight: bold;
    background-color: #E66767;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    margin-top: 14px;
    margin-left: 3px;
`

export const ContainerInfos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    max-width: 90%;
    padding: 10px;

    
    p {
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        color: #E66767;
    }
`