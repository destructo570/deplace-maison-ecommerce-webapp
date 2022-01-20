import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCart = styled(motion.div)`
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100vh;
  max-width: 100%;
  z-index: 102;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.background};

  /* Hide Scrollbars */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
  }
`;

//
//Styled BackDrop
//

export const StyledBackDrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 101;
`;

//
//Styled Cart Overlay
//

export const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.primaryText};
  padding: 3em;
  width: 100%;

  h1 {
    font-size: 4.5rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 60px;
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

//
//CartItem
//

export const StyledCartItem = styled.li`
  text-transform: uppercase;
  padding-top: 2em;
  padding-left: 1em;
  padding-right: 1em;

  img {
    max-width: 130px;
  }
`;

export const StyledCartProductDetails = styled.div`
  min-width: 30%;
  h2 {
    font-family: "TTrailer";
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 60px;
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    font-size: 0.6rem;
  }
`;

export const StyledCartProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
`;

export const StytledProductSummary = styled.div`
  position: relative;
  input {
    width: 60px;
    min-height: 40px;
    text-align: center;
    font-family: "Favorit";
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  input:focus {
    outline: none;
  }

  p {
    text-decoration: underline;
    margin-top: 2em;
    font-size: 0.8rem;
  }

  p:hover {
    cursor: pointer;
  }
`;

export const StyledCheckoutSummary = styled.div`
  padding: 2em;
  margin-top: 1em;
  background-color: ${({ theme }) => theme.color.primaryText};
  color: ${({ theme }) => theme.color.background};
  text-transform: uppercase;

  div {
    display: flex;
    justify-content: space-between;
  }
`;
