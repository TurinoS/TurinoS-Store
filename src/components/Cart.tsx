import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import { useContext } from "react";
import { BsBagXFill } from "react-icons/bs";
import styled from "styled-components";

const StyledCart = styled.div`
    position: absolute;
    z-index: 2;
    top: 45px;
    left: calc(100vw - 310px);
    width: 300px;
    max-height: 430px;
    padding: 1em;
    border-radius: 20px 5px;
    background-color: var(--light-cream);
    box-shadow: 1px 1px 6px 1px var(--light-plum);
    
    & div {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    & p {
        font-size: 17px;
    }
`

const CartItem = styled.section`
    border-bottom: 1px solid var(--plum);
    padding: .25em 0;
    display: grid;
    grid-template-areas: 
    "img title"
    "btn price";
    grid-template-columns: 60px 1fr;
    row-gap: .25em;

    & img {
        grid-area: img;
    }

    & .title {
        grid-area: title;
    }

    & .price {
        grid-area: price;
    }
`

const RemoveIcon = styled(BsBagXFill)`
    border-radius: 50%;
    background-color: var(--pale-coral);
    color: var(--cream);
    width: 24px;
    height: 24px;
    padding: 4px;
    grid-area: btn;

    &:hover {
        background-color: var(--burnt-sienna);
        cursor: pointer;
    }
`

export default function Cart() {
    const { menData } = useContext(AppContext) 

    return(
        <StyledCart>
            <div>
                {menData.map((item) => (
                    <CartItem key={item.id}>
                        <Image src={item.image} alt={item.title} width={50} height={60} />
                        <p>{item.title}</p>
                        <h4>1 x ${item.price}</h4>
                        <RemoveIcon />
                    </CartItem>
                ))}
                {menData.map((item) => (
                    <CartItem key={item.id}>
                        <Image src={item.image} alt={item.title} width={50} height={60} />
                        <p className="title">{item.title}</p>
                        <h4 className="price">1 x ${item.price}</h4>
                    </CartItem>
                ))}
            </div>
        </StyledCart>
    )
}