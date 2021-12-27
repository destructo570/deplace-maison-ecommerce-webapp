import styled from "styled-components";

export const StyledContact = styled.div`
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  margin-top: ${({ theme }) => theme.mobile.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.mobile.pageTopMargin};
  max-width: ${({ theme }) => theme.layout.medium.size};

  h1 {
    font-weight: 400;
    line-height: 1.1em;
    font-size: clamp(1.5rem, 15vw, 2rem);
    margin-bottom: 0.4em;
  }

  a {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2em;
    padding-top: 1em;
    color: ${({ theme }) => theme.color.primaryText};
  }

  h4 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;

    a {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 1rem;
      margin-bottom: 0.4em;
    }
  }
`;

export const StyledContactItem = styled.section`
  margin: 4em 0;
  display: grid;

  div {
    margin: 1em 0;
  }

  div h2 {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.2em;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    grid-template-columns: 1fr 1fr;

    h1 {
      grid-column-start: 2;
    }

    div h2 {
      font-size: 1.2rem;
    }
  }
`;
