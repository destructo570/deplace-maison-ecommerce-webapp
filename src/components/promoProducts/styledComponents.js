import styled from "styled-components";

export const StyledPromoProduct = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    overflow: scroll;
    padding: 0 5em;

    /* Hide Scrollbars */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.primaryAccent};
  padding: 1em 2em;
  min-width: 150px;

  &:hover {
    cursor: grab;
  }

  img {
    max-width: 100px;
  }

  img + img {
    max-width: 40px;
  }
`;
export const StyledProductSize = styled.p`
  font-size: 0.6rem;
`;
export const StyledProductName = styled.h4`
  text-transform: uppercase;
  font-family: "TTrailer";
  font-weight: 300;
  font-size: 3.6rem;
  letter-spacing: -1.8px;
  line-height: 0.9em;
`;
export const StyledProductPrice = styled.p`
  text-decoration: line-through;
  line-height: 0.9em;
  font-weight: 300;
`;
export const StyledProductFinalPrice = styled.p`
  line-height: 1.3em;
  font-weight: 500;
`;

export const StyledActions = styled.div`
  padding-left: 5rem;
  padding-right: 3rem;
`;
