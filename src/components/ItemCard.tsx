import Image from "next/image";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai"

const StyledCard = styled.div`
    width: 175px;
    display: flex;
    flex-direction: column;

    & img {
        align-self: center;
    }
`

interface ItemCardProps {
    title: string;
    image: string;
    price: number;
    rating: number;
}

export default function ItemCard({ title, image, price, rating }: ItemCardProps) {
    return(
        <StyledCard>
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