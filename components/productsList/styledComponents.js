import styled from "styled-components";

export const StyledProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.primaryAccent};
  padding: 1em 0;

  text-transform: uppercase;

  &:hover {
    cursor: grab;
  }

  //Set max with for product type label (e.g. unisex)
  img + img {
    max-width: 80px;
  }
`;

export const StyledProductImage = styled.img`
  max-height: 150px;
  object-fit: contain;
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
