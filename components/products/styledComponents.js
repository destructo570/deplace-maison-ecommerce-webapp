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
