import styled from "styled-components";

export const StyledInputField = styled.div`
  display: flex;
  font-family: Favorit;
  margin-top: 0.2em;
  margin-bottom: 0.2em;

  input {
    -webkit-appearance: none;
    width: 100%;
    max-width: 350px;
    outline: none;
    border: none;
    padding: 0.5em;
    font-family: Favorit;
    font-size: clamp(0.8rem, 10vw, 1rem);
    border-bottom: 1px solid black;
    display: inline-block;
    background-color: ${({ theme }) => theme.color.background};
  }

  button {
    background-color: ${({ theme }) => theme.color.background};
    border: none;
    padding: 0.5em;
    border-bottom: 1px solid black;
    text-transform: uppercase;

    font-size: clamp(0.6rem, 10vw, 0.8rem);
  }
`;
