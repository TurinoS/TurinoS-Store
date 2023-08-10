import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --cream: #efe7d1;
        --plum: #312e39;
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
        color: var(--plum);
    }
`