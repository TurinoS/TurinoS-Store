import styled from "styled-components";
import banner from "../assets/banner-img.jpg"

const StyledBanner = styled.div`
    background-image: url(${banner.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    height: 80vh;
    color: var(--plum);
    text-shadow: -1px -1px 2px rgba(255, 255, 255, 0.7), 1px 1px 2px rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em;

    & h1 {
        font-size: 30px;
        margin-bottom: 1em;

        @media (min-width: 450px) {
            font-size: 36px;
        }
    }

    & p {
        font-size: 24px;
        font-weight: 600;
    }
`

interface BannerProps  {
    name: string,
    text: string,
}

export default function Banner({ name, text }: BannerProps) {
    return(
        <StyledBanner>
            <div>
                <h1>{text}</h1>
                <p>{name}</p>
            </div>
        </StyledBanner>
    )
}