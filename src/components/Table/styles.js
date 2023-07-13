import styled from "styled-components";

export const Container = styled.div`
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    width: 100%;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: ${({ props }) => `repeat(${props}, auto)`};
    gap: 5px;
    width: 100%;
    margin-bottom: 24px
`
export const ButtonCard = styled.button`
    outline: none;
    border: none;
    appearance: none;
    padding: 0;
    background-color: transparent;
`