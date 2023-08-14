import Image from "next/image";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai"
import { BsBagPlusFill } from "react-icons/bs"

const StyledCard = styled.div`
    width: 175px;
    display: flex;
    flex-direction: column;

    & img {
        align-self: center;
    }

    & div {
        display: flex;
        justify-content: space-between;
        padding: .75em 1.5em 0 0;
    }

    &:hover {
        cursor: pointer;

        .addCartIcon {
            background-color: var(--deep-coffee);
            color: var(--cream);
        }
    }
`

const BagIcon = styled(BsBagPlusFill)`
    border-radius: 50%;
    background-color: var(--deep-coffee);
    color: var(--cream);
    align-self: flex-end;
    position: relative;
    top: 10px;
    right: 10px;
    z-index: 0;
    width: 32px;
    height: 32px;
    padding: 6px;

    @media (min-width: 1000px) {
        background-color: transparent;
        color: transparent;
    }
`

interface ItemCardProps {
    title: string;
    image: string;
    price: number;
    rating: number;
    onClick: (price: number) => void;
}

export default function ItemCard({ title, image, price, rating, onClick }: ItemCardProps) {
    return(
        <StyledCard>
            <BagIcon className="addCartIcon" onClick={() => onClick(price)} />
            <Image src={image} alt={title} width={150} height={175} />
            <h3>{title}</h3>
            <div>
                <p>${price}</p>
                <p>
                    <AiFillHeart />
                    {rating}
                </p>
            </div>
        </StyledCard>
    )
}