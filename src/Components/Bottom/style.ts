import styled from "styled-components"
import background from '../../assets/img/background.png'

export const BottomContainer = styled.div`
    background-image: url(${background});
    background-size: cover;
    max-width: 100%;
    height: 40vh;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

export const SocialContainer = styled.div`
    display: flex;
    gap: 20px;
`

export const Text = styled.p`
    font-family: Roboto;
    font-weight: 400px;
    line-height: 100%;
    color: #E66767;
    size: 10px;
    max-height: 30px;
`