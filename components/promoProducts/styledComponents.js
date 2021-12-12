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

export const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.primaryAccent};
  padding: 1em 2em;
  min-width: 250px;
  text-transform: uppercase;

  &:hover {
    cursor: grab;
  }

  img + img {
    max-width: 80px;
  }
`;

export const StyledProductImage = styled.img`
  min-width: 200px;
`;

export const StyledProductSize = styled.p`
  font-size: 1rem;
`;
export const StyledProductName = styled.h4`
  text-transform: uppercase;
  font-family: "TTrailer";
  font-weight: 300;
  font-size: 4.6rem;
  letter-spacing: -1.8px;
  line-height: 1em;
`;
export const StyledProductPrice = styled.p`
  text-decoration: line-through;
  line-height: 0.9em;
  font-weight: 300;
  font-size: 1.2rem;
`;
export const StyledProductFinalPrice = styled.p`
  line-height: 1.3em;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const StyledActions = styled.div`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
`;
