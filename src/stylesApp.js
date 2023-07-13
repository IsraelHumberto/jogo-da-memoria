import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    max-width: 350px;
    background-color: var(--purple);
    border: 3px solid var(--navy-blue);
    border-radius: 8px;
    padding: 24px 16px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    position: relative;
`

export const Title = styled.h1`
    margin-bottom: 48px;
    color: #FFF;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 4px;
        background-color: var(--yellow);
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Button = styled.button`
    padding: 16px 8px;
    font-weight: 800;
    font-size: 18px;
    color: var(--navy-blue);
    background-color: var(--yellow);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: all ease 200ms;

    &:hover {
        filter: brightness(0.9);
        transition: all ease 200ms;
    }
`

