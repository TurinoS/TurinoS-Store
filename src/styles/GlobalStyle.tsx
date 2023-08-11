import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --cream: #efe7d1;
        --plum: #312e39;
        --light-plum: #4e4174;
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
        width: 100%;
        color: var(--plum);
    }
`