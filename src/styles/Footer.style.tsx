import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: var(--plum);
    color: var(--cream);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 2em 1em;

    & div {
        display: flex;
        flex-direction: column;
        gap: .5em;
        align-items: center;

        & h3 {
            margin-bottom: .5em;
            font-size: 24px;
        }

        & a {
            text-decoration: none;
            color: var(--cream);
        }
    }

    & .links {
        display: flex;
        flex-direction: row;
        gap: 1.25em;
    }

    & .developer {
        padding: 2em 3em;
        border-top: 1px solid var(--light-plum);
    }
`

export default StyledFooter;