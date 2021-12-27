import styled from "styled-components";

export const StyledTestimonials = styled.section`
  margin-top: 4em;
  margin-bottom: 8em;
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  position: relative;
  max-width: ${({ theme }) => theme.layout.maxWidth};

  img {
    max-width: 60px;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledTestimonialItem = styled.div`
  position: absolute;
  display: flex;
  padding: 1em;
  top: -10px;

  h2 {
    font-family: "Cyberthrone";
    font-size: clamp(0.5rem, 5vw, 3rem);
    display: inline;
    min-width: 30%;
    margin-top: 0.2em;
  }

  p {
    font-size: clamp(0.5rem, 5vw, 0.8rem);
    margin-left: 2em;
    line-height: 1em;
  }
  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    p {
      font-size: clamp(0.5rem, 5vw, 1.1rem);
    }
  }
`;
