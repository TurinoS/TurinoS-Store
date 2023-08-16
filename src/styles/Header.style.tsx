import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi"
import { HiShoppingCart } from "react-icons/hi";

export const StyledHeader = styled.header`
    background-color: var(--cream);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 0 .5em 0 1em;
    height: 65px;
    width: 100vw;
    position: sticky;
    z-index: 1;
    top: 0;
    box-shadow: 0 1px 6px 1px var(--light-plum);

    @media (min-width: 1024px) {
        padding: 0 2em 0 0;
    }

    & .img {
        position: absolute;
        top: 3px;
        left: calc(50vw - 100px);
        width: 100px;
        height: 50px;

        @media (min-width: 400px) {
            width: 130px;
            height: 60px;  
        }

        @media (min-width: 500px) {
            left: calc(50vw - 65px);  
        }

        @media (min-width: 1024px) {
            left: calc(65vw);
        }

        @media (min-width: 1400px) {
            left: calc(50vw - 65px);
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

export const MenuMobile = styled.nav`
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

export const MenuIcon = styled(GiHamburgerMenu)`
    @media (min-width: 1024px) {
        display: none
    }

    &:hover {
        cursor: pointer;
    }
`

export const MenuDesktop = styled.nav`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        background-color: var(--deep-coffee);
        height: 100%;
        font-size: 24px;

        & .electronic {
            border-right: none;
        }
        
        & a {
            text-decoration: none;
            color: var(--cream);
            font-weight: 600;
            margin-bottom: .25em;
            border-right: 1px solid var(--cream);
            padding: 0 .75em;

            &:hover {
                color: var(--yellow-neon);
            }
        }
    }
`

export const CartIcon = styled(HiShoppingCart)`
    &:hover {
        cursor: pointer;
    }
`