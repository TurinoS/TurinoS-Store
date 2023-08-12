import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5vw;

    & .logo {
        text-align: center;
        width: 85vw;

        @media (min-width: 380px) {
            display: none;
        }
    }
`

export default Wrapper;