import styled from "styled-components";

export const StyledPromoInfo = styled.section`
  margin-top: 3em;
  margin-bottom: 3em;
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};

  span:first-child {
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: underline;
    margin-right: 2em;
  }
  span:last-child {
    text-decoration: underline;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.1em;
    letter-spacing: 0px;
  }
`;
