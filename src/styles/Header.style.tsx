import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSearchAlt2 } from "react-icons/bi";

export const StyledHeader = styled.header`
    background-color: var(--cream);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 0 1em;
    height: 65px;
    width: 100vw;

    .icons {
        gap: 2em;
    }

    & img {
        position: absolute;
        top: 3px;
        left: calc(50vw - 65px);
        display: none;

        @media (min-width: 380px) {
            display: block;
        }
    }

    & div {
        display: flex;
        gap: .25em;
        overflow: visible;

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

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 1em;
    position: absolute;
    z-index: 2;
    top: 42px;
    left: 34px;
    border-radius: 5px 20px;
    background-color: var(--deep-coffee);
    box-shadow: 1px 1px 6px 1px var(--light-plum);

    & a {
        text-decoration: none;
        color: var(--cream);
        font-weight: 600;
        border-bottom: 1px solid var(--cream);
        margin-bottom: .25em;

        &:hover {
            color: var(--yellow-neon);
        }
    }
`

export const SearchBar = styled.input`
    padding: .5em 1em;
    font-size: 18px;
    border: none;
    border-radius: 15px 5px;
    box-shadow: 1px 1px 6px 1px var(--light-plum);
    position: absolute;
    z-index: 2;
    top: 15px;
    left: 105px;
    width: 200px;

    @media (min-width: 425px) {
        width: 250px
    }
`   

export const MenuIcon = styled(GiHamburgerMenu)`
    &:hover {
        cursor: pointer;
    }
`

export const SearchIcon = styled(BiSearchAlt2)`
    &:hover {
        cursor: pointer;
    }
`