import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
`;

export const StyledLogo = styled.a`
  width: 80px;
`;

export const StyledNavIcon = styled.div`
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledCartItem = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;
