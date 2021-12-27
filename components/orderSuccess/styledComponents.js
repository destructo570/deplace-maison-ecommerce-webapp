import styled from "styled-components";

export const StyledOrderSuccess = styled.section`
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};

  height: 50vh;
  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;
