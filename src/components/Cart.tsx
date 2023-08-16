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
    padding: 1em 1em 0 1em;
    border-radius: 20px 5px;
    background-color: var(--light-cream);
    box-shadow: 1px 1px 6px 1px var(--light-plum);
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        left: calc(100vw - 450px);
        width: 400px;
    }
    
    & .items {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    & p {
        font-size: 17px;
    }

    & h4 {
        margin: .75em 0;
    }

    & .checkout {
        display: flex;
        flex-direction: column;
        width: 300px;
        position: relative;
        right: 1em;
        padding: 0 1em 1em 1em;
        box-shadow: 0 -1px 6px 1px var(--light-plum);
        border-radius: 0 0 20px 5px;

        @media (min-width: 1024px) {
        width: 400px;
    }
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

const Button = styled.button`
    background-color: var(--cream);
    width: 100%;
    border: 2px solid var(--plum);
    padding: .5em;
    font-size: 16px;

    &:hover {
        background-color: var(--plum);
        color: var(--cream);
        font-weight: 600;
        transition: 200ms;
        cursor: pointer;
    }
`

type Product = {
    id: number;
    qtt: number;
    title: string;
    price: number;
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    },
    category: string;
  };

export default function Cart() {
    const { cartList, cartPrice, handleRemoveCart } = useContext(AppContext) 

    return(
        <StyledCart>
            {cartList.length === 0 && <p style={{ padding: '1em' }}>Cart empty</p>}
            <div className="items">
                {cartList.map((item, index) => (
                    <CartItem key={index}>
                        <Image src={item.image} alt={item.title} width={50} height={60} />
                        <p>{item.title}</p>
                        <h5>{item.qtt - 1} x ${item.price}</h5>
                        <RemoveIcon onClick={() => handleRemoveCart(item)} />
                    </CartItem>
                ))}
            </div>
            <div className="checkout">
                <h4>Subtotal: ${cartPrice}</h4>
                <Button>Checkout</Button>
            </div>
        </StyledCart>
    )
}