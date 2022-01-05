import styled from "styled-components";

export const StyledMyOrders = styled.section`
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageLeftPadding};
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};
  min-height: 50vh;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  h1 {
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  li {
    list-style: none;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1em;
    }
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

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin: 0;
  } ;
`;

export const StyledOrderInfo = styled.div`
  margin-left: 1em;

  p {
    font-size: 0.8rem;
  }
`;
