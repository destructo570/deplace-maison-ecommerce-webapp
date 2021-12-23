import styled from "styled-components";

export const StyledMyOrders = styled.section`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageLeftPadding};
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.mobile.pageTopMargin};
  min-height: 50vh;

  li {
    list-style: none;
  }
`;

export const StyledOrderItem = styled.li`
  list-style: none;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.primaryText};
  padding: 1em;
  margin: 1em 0;
  img {
    max-width: 100px;
  }
`;

export const StyledOrderInfo = styled.div`
  min-width: 40%;
  margin-left: 1em;

  p {
    font-size: 0.8rem;
  }
`;

export const StyledOrderPriceInfo = styled.div`
  margin-left: 1em;
`;
