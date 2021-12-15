import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: 0.7rem;
  text-transform: uppercase;
  display: block;
`;

export const StyledTextInput = styled.div`
  margin: 2em 0;
`;
export const StyledInput = styled.input`
  padding: 0.4em;
  width: 100%;
  font-size: 1.2rem;
  margin-top: 0.6em;
  font-family: "Favorit";
  border: none;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 2px solid ${({ theme }) => theme.color.primaryText};

  &:focus {
    outline: ${({ theme }) => theme.color.primaryText} solid 1px;
    border: none;
  }
`;
