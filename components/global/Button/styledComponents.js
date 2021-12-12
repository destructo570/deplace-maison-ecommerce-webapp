import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.background};
  border: none;
  padding: 1em 2em;
  width: 100%;
  border-radius: 4px;
  margin: 1em 0;
  text-transform: uppercase;
  font-family: "Favorit";
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;
