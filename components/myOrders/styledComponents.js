import styled from "styled-components";

export const StyledMyOrders = styled.section`
  min-height: 50vh;

  h1 {
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  li {
    list-style: none;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
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
