import styled from "styled-components";

export const StyledNotFound = styled.section`
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.mobile.pageTopMargin};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  position: relative;

  img {
    position: absolute;
    top: 25vh;
    max-width: 50%;
  }

  marquee {
    font-size: 25rem;
    font-family: "TTrailer";
  }

  p {
    font-size: 1.8rem;
    padding: 0 1em;
  }

  a {
    color: ${({ theme }) => theme.color.primaryText};
  }
`;
