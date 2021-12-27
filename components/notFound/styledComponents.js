import styled from "styled-components";

export const StyledNotFound = styled.section`
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  position: relative;

  img {
    position: absolute;
    top: 25vh;
    width: 50%;
    max-width: 400px;
  }

  marquee {
    font-size: clamp(25rem, 40vw, 40rem);
    font-family: "TTrailer";
  }

  p {
    font-size: 1.8rem;
    padding: 0 1em;
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
