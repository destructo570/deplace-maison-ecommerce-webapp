import styled from "styled-components";

export const StyledProducts = styled.section`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageLeftPadding};
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.mobile.pageTopMargin};

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
  }
`;
