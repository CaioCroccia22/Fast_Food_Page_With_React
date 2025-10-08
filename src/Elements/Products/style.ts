import styled from "styled-components";
import type { Props } from ".";

type TagContainerProps = Omit<Props, "Tags"> & {Len: number}

export const ProductContainer = styled.div`
    width: 472px;
    height: 398px;
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

export const TagContainer = styled.div<TagContainerProps>`
    position: absolute;
    display: flex;
    gap: 40px;
    left: ${(props) => props.Len > 1 ? '190px' : '350px' };
`

export const FoodInfos = styled.div`
    display: flex;
    flex-direction: column;
    border: #E66767 1px solid;
    color: #E66767;
    height: 181px;
    padding: 10px;
    gap: 14px;
`
export const ContainerInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 21px;

    span {
        font-size: 18px;
        font-weight: 700;
        margin-right: 8px;
    }

`

export const SubTitle = styled.h3`
    Font-size: 18px;
`

export const ContainerRate = styled.div`
    display: flex;
    width: 55px;
    align-items: flex-end;
    justify-content: center;
`

export const ContainerText = styled.div`
    height: 88px;

    p {
        font-family: 'Roboto Variable';
        font-weight: 400;
        font-size: 14px;
        color: #E66767;
    }
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
    margin-left: 3px;
    cursor: pointer;
    
`
