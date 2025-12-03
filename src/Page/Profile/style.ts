import { motion } from "motion/react"

import styled from "styled-components";

type Props = {
  $activeModal: boolean
}

export const ContainerProducts = styled.div<Props>`
  width: 1024px;
  margin: 0 auto;
  position: ${(props) => props.$activeModal == true ? `relative` : ``}

`

export const ProfileProductsList = styled.div`
  width: 1024px;
  height: 708px;
  display: grid;
  grid-template-columns: repeat(3, 352px);
  `

  export const ContainerMenu = styled.div`
    background-color: #E66767;
    width: 320px;
    height: 338px;
    display: flex;
    flex-direction: column;
    
    `
    
export const ContainerMenuImage = styled.div`
        width: 304px;
        height: 167px;
        margin: 8px;
        display: flex;
        align-items: center;

        img {
            width: 304px;
            height: 167px;
        }
    `

export const TitleMenu = styled.div`
    height: 19px;
    margin-left: 8px;

    h3 {
        color:  #FFEBD9;
        font-size: 16px;
        left: 0;
    }
`

export const TextMenu = styled.div`
    width: 304px; 
    height: 88px;
    margin: 8px;

    p{
        color:  #FFEBD9;
        font-weight: 400px;
        font-size: 14px;
        line-height: 22px;
    }
`

export const ContainerMenuButton = styled.div`
    width: 304px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
`


export const BuyButton = styled.button`
    background-color: #FFEBD9;
    font-size: 14px;
    color: #E66767;
    border: none;
    cursor: pointer;
    width: 100%
    
`

