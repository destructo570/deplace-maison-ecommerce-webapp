import styled from "styled-components";

export const StyledCreditsHeader = styled.div`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  text-transform: uppercase;

  h1 {
    text-align: right;
    font-size: clamp(7.5rem, 20vw, 20rem);
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
`;
