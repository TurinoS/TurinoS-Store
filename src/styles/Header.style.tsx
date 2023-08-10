import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: var(--cream);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding-left: 1em;
    height: 65px;

    .icons {
        gap: 2.5em;
    }

    & img {
        position: absolute;
        top: 3px;
        left: calc(50vw - 65px);
    }

    & div {
        display: flex;
        gap: .25em;

        & span {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--plum);
            color: var(--cream);
            border-radius: 50%;
            position: relative;
            top: -15px;
            right: 8px;
            padding: 0 5px;
            font-size: 12px;
            font-weight: 600;
        }
    }
`

export default StyledHeader;