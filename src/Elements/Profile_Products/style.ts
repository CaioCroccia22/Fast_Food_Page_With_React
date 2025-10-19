import styled from "styled-components";


export const Container = styled.div`
    background-color: #E66767;
    width: 320px;
    height: 338px;
    display: flex;
    flex-direction: column;

    `
    
export const ContainerImage = styled.div`
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

export const ContainerTitle = styled.div`
    height: 19px;
    margin-left: 8px;

    h3 {
        color:  #FFEBD9;
        font-size: 16px;
        left: 0;
    }
`

export const ContainerText = styled.div`
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

export const ContainerButton = styled.div`
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

// export const ContainerImg = styled.div`
//     width: 1024px;
//     height: 344px;
//     background-color: #E66767;
//     object-fit: cover;
//     display: flex;
//     align-itens: center;
//     justify-content: center;
//     position: absolute;
//     z-index: 2;

//     &::after{
//         content: '';
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: 1;
//         background-color: red;
//         position: absolute;
//         opacity: 0.5;
//     }
// `
