import { createGlobalStyle } from "styled-components";


export const Globalstyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Mono", monospace;
        text-decoration: none;
    }
    
    body {
            width: 100vw;
            height: 100vh;
        }
`;