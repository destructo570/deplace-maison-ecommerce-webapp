import styled from "styled-components";

export const StyledContact = styled.div`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.mobile.pageTopMargin};

  h1 {
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 1.1em;
  }

  a {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2em;
    padding-top: 1em;
    color: ${({ theme }) => theme.color.primaryText};
  }

  h4 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const StyledContactItem = styled.section`
  margin: 4em 0;

  div,
  address {
    margin: 2em 0;
  }

  address h2 {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.2em;
  }
`;
