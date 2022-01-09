import styled from "styled-components";

export const StyledProducts = styled.section`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
  }
`;

export const StyledProductsHeader = styled.header`
  h1 {
    background-color: ${({ theme }) => theme.color.primaryAccent};
    padding: 0.5em;
    margin: 1em 0;
    border: 1px solid ${({ theme }) => theme.color.primaryText};
    text-align: center;
    font-weight: 400;
    font-size: clamp(1rem, 10vw, 1.2rem);
  }
`;
