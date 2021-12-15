import styled from "styled-components";

export const StyledOrderSuccess = styled.section`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.mobile.pageTopMargin};

  height: 50vh;
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;
