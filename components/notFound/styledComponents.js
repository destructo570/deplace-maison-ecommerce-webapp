import styled from "styled-components";

export const StyledNotFound = styled.section`
  /* margin-top: 2em;
  margin-bottom: 2em; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  position: relative;
  font-size: clamp(25rem, 40vw, 40rem);
  font-family: "TTrailer";

  img {
    position: absolute;
    top: 40vh;
    width: 50%;
    max-width: 400px;
    z-index: 100;
  }

  p {
    font-size: 1.8rem;
    padding: 0 1em;
    font-family: "Favorit";
  }

  a {
    color: ${({ theme }) => theme.color.primaryText};
  }

  @media (min-width: ${({ theme }) => theme.layout.large}) {
    img {
      top: 18vh;
      max-width: 550px;
    }
  }
`;
