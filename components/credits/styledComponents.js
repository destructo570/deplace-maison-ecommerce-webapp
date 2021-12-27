import styled from "styled-components";

export const StyledCreditsHeader = styled.div`
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  max-width: ${({ theme }) => theme.layout.medium.size};

  text-transform: uppercase;

  h1 {
    text-align: right;
    font-size: clamp(7.5rem, 20vw, 8rem);
    font-weight: 350;
    letter-spacing: -7px;
    line-height: 0.8em;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  ul {
    margin-top: 3em;
    margin-bottom: 10em;
    display: grid;
    grid-auto-flow: rows;
    grid-gap: 20px;
  }

  li {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;

    li {
      grid-template-columns: 1fr 2fr;
    }
  }
`;
