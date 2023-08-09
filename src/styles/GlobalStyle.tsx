import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Courier, sans-serif;
    }

    body {
        background-color: var(--magnolia);
        color: var(--marine-blue);
        max-height: 100vw;
        width: 100%;
    }
`