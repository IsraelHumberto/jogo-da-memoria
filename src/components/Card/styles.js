import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  aspect-ratio: 1/1;
  /*
    * Created with https://www.css-gradient.com
    * Gradient link: https://www.css-gradient.com/?c1=6f2fc7&c2=593175&gt=r&gd=dcc
    */

  /* &:hover .flipper {
    transform: rotateY(180deg);
  } */

  .flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    transform: ${({ props }) => props.open == true ? 'rotateY(180deg)' : ''};

    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: ${({ props }) => props.checked == true ? 'none' : 'hidden'};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        font-size: clamp(14px, 8vw, 56px);
    }

    .front {
        background: var(--purple);
        color: #FFF;
    }

    .back {
        transform: rotateY(180deg);
        background-color: ${({ props }) => props.checked == true ? '#3FA254' : '#F1f1f1'};
        color: #6F2FC7;
        transition: background cubic-bezier(0.215, 0.610, 0.355, 1) 1s;
    }
  }
`;
