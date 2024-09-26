import styled from "styled-components";

export const StyledCreditsHeader = styled.div`
  text-transform: none;

  h1 {
    text-align: right;
    font-size: clamp(4.5rem, 20vw, 6rem);
    font-weight: 350;
    letter-spacing: -7px;
    line-height: 1em;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
  }

  ul {
    margin-top: 3em;
    margin-bottom: 10em;
    display: grid;
    grid-auto-flow: rows;
    grid-gap: 50px;
  }

  li {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 90px;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;

    li {
      grid-template-columns: 1fr 2fr;
    }
  }
`;
