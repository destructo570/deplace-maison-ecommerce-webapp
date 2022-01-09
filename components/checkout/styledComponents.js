import styled from "styled-components";

export const StyledCheckout = styled.section`
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageLeftPadding};
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};
  max-width: ${({ theme }) => theme.layout.maxWidth};

  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
    form {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const StyledSubCheckoutForm = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
`;

//-------
//ProductList Preview
//-------

export const StyledCheckoutDetails = styled.div`
  min-width: 350px;
  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: 2em;
    width: 50%;
  }
`;

export const StyledCheckoutProductList = styled.section`
  border: 2px solid ${({ theme }) => theme.color.primaryText};
  padding: 2em;
`;

export const StyledCheckoutProductItem = styled.div`
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.primaryText};
  margin: 1.5em 0;
  padding-top: 1em;
  padding-left: 1em;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;

  div {
    width: 100%;
  }

  img {
    max-width: 130px;
  }

  h1 {
    font-family: "TTrailer";
    font-size: 4rem;
    font-weight: 400;
    line-height: 1em;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const StyledCheckoutSummary = styled.div`
  border: 2px solid ${({ theme }) => theme.color.primaryText};
  padding: 2em;
  margin: 2em 0;
  text-transform: uppercase;

  div {
    display: flex;
    justify-content: space-between;
  }

  div:last-child {
    margin-top: 0.5em;
  }

  p {
    align-self: center;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

export const StyledSubmitOrder = styled.button`
  width: 100%;
  padding: 0.8em 2em;
  font-family: "Favorit";
  font-size: 1.2rem;
  text-transform: uppercase;
  border: none;
  background-color: ${({ theme }) => theme.color.primaryText};
  color: ${({ theme }) => theme.color.background};

  &:hover {
    cursor: pointer;
  }
`;
