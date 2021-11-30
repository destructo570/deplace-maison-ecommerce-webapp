import styled from "styled-components";

export const StyledCart = styled.div``;

//
//Styled Cart Overlay
//

export const StyledCartOverlay = styled.div`
  position: fixed;
  right: 0px;
  height: 100vh;
  z-index: 101;
  background-color: ${({ theme }) => theme.color.background};
`;

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.5em;
  h1 {
    font-size: 4rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 50px;
    letter-spacing: -5px;
  }

  span {
    margin-left: 1em;
  }

  img {
    width: 30px;
    margin-left: 3em;
    align-self: center;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.primaryText};
  border-width: 0.5px;
`;
