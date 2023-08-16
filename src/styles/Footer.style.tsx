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

    @media (min-width: 1100px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

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

        &:hover {
            color: var(--yellow-neon);
        }
        }
    }

    & .links {
        display: flex;
        flex-direction: row;
        gap: 1.25em;
    }

    & .developer {
        padding: 2em 3em 0;
        border-top: 1px solid var(--light-plum);
        width: 100%;
    }
`

export default StyledFooter;