import styled from "styled-components";

export const StyledCookie = styled.div`
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};
  max-width: ${({ theme }) => theme.layout.medium.size};

  h1 {
    font-size: clamp(2.5rem, 15vw, 8rem);
    font-weight: 350;
    letter-spacing: -7px;
    line-height: 0.8em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -1px;
    text-transform: uppercase;
  }

  p {
    padding-top: 0.8em;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2em;
  }

  li {
    list-style: none;
    margin: 1.2em 0;
  }

  li + li {
    margin-top: 4em;
  }

  a {
    color: ${({ theme }) => theme.color.primaryText};
    font-size: 1.4rem;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
  }
`;
