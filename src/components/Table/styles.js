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
    margin-bottom: 24px;
    position: relative;
`;
export const ButtonCard = styled.button`
    outline: none;
    border: none;
    appearance: none;
    padding: 0;
    background-color: transparent;
`;
export const Modal = styled.div`
    background-color: var(--purple);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all ease 200ms;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    padding: 14px 18px;
    border-radius: 8px;
    border: 4px solid var(--yellow);
    color: #FFF;
    width: 80%;
    text-align: center;

    h1 {
        margin-bottom: 14px;
    }
`