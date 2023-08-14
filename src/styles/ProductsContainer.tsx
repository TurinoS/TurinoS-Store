import styled from "styled-components";

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5vh 7.5vw;
    gap: 2em;

    @media (min-width: 450px) {
        justify-content: space-between;
    }
`

export default ProductsContainer;