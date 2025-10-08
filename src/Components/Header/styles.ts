import styled from "styled-components";
import background from '../../assets/img/background.png'
import type { Props } from ".";

export const HeaderContainer = styled.div<Props>`
    background-image: url(${background});
    background-size: cover;
    max-width: 100%;
    height: ${({ Page }) => Page === 'Home' ? '384px' : '186px'};
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 140px;
`

export const Title = styled.h1`
    font-weight: 900;
    line-height: 100%;
    color: #E66767;
    size: 36px;
    width: 539px;
    text-align: center;
    Font-size: 36px;

`

export const BuyText = styled.h3`
    font-weight: 900px;
    Color: #E66767;
    cursor: pointer;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    align-items: center;
`