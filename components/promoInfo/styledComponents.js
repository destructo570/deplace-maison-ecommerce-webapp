import styled from "styled-components";

export const StyledPromoInfo = styled.section`
  margin-top: 3em;
  margin-bottom: 3em;
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  max-width: ${({ theme }) => theme.layout.maxWidth};

  span:first-child {
    font-size: clamp(0.8rem, 3vw, 1.2rem);
    text-transform: uppercase;
    text-decoration: underline;
    margin-right: 2em;
  }
  span:last-child {
    text-decoration: underline;
  }
  p {
    font-size: clamp(1.5rem, 3vw, 3.2rem);
    line-height: 1.1em;
    letter-spacing: 0px;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
  }
`;
