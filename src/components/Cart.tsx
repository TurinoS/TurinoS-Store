import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import { useContext } from "react";
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
`

const CartItem = styled.section`
    border-bottom: 1px solid var(--plum);
    padding: .25em 0;
    display: grid;
    grid-template-areas: 
    "img title"
    "img price";
    grid-template-columns: 60px 1fr;

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

export default function Cart() {
    const { menData } = useContext(AppContext) 
    return(
        <StyledCart>
            <div>
                {menData.map((item) => (
                    <CartItem key={item.id}>
                        <Image src={item.image} alt={item.title} width={50} height={60} />
                        <p>{item.title}</p>
                        <p>1 x ${item.price}</p>
                    </CartItem>
                ))}
                {menData.map((item) => (
                    <CartItem key={item.id}>
                        <Image src={item.image} alt={item.title} width={50} height={60} />
                        <p className="title">{item.title}</p>
                        <p className="price">1 x ${item.price}</p>
                    </CartItem>
                ))}
            </div>
        </StyledCart>
    )
}