import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 3em;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.footerBackground};
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 0.7rem;

  @media (min-width: ${({ theme }) => theme.layout.medium}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

//
// NewsLetter Component
//

export const StyledNewsLetter = styled.div`
  display: none;

  img {
    width: 50px;
  }

  form {
    margin-top: 3.5em;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

//
// Info Component
//

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-top: 0.4em;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryText};
    font-size: 1.3rem;
    font-weight: 500;
  }

  div:last-child {
    margin-top: 5em;
  }
`;

export const StyledSecondaryLink = styled.div`
  a {
    font-size: 0.7rem;
  }
`;

//
// Policy Component
//
export const StyledPolicy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-top: 0.4em;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryText};
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

//
// Other Component
//
export const StyledOther = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StytledIcon = styled.a`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  img {
    width: clamp(3rem, 5vw, 3.5rem);
    transform: rotate(-90deg);
  }

  img:first-child {
    position: absolute;
    right: 0;
  }

  img:last-child {
    padding: 0.6em;
  }
`;

//
// Social
//
export const StyledSocial = styled.div`
  display: flex;
  img {
    width: 24px;
  }

  img:hover {
    cursor: pointer;
  }

  img + img {
    margin-left: 0.5em;
  }
`;
