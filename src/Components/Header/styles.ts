import styled from "styled-components";
import background from '../../assets/img/background.png'

export const HeaderContainer = styled.div`
    background-image: url(${background});
    background-size: cover;
    max-width: 100%;
    height: 30vh;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

export const Text = styled.h1`
    font-family: Roboto;
    font-weight: 900px;
    line-height: 100%;
    color: #E66767;
    size: 36px;
    width: 539px;
    text-align: center;

`