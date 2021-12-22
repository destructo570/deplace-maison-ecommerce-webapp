import styled from "styled-components";

export const StyledPromoProduct = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    overflow: scroll;
    padding-left: 2.5em;

    /* Hide Scrollbars */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledActions = styled.div`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
`;
