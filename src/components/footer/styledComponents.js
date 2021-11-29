import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 3em;
  padding: 2em;
  background-color: ${({ theme }) => theme.color.footerBackground};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  text-transform: uppercase;
  font-size: 0.6rem;
`;

//
// NewsLetter Component
//

export const StyledNewsLetter = styled.div`
  img {
    width: 30px;
    margin-top: 0.5rem;
  }

  form {
    margin-top: 3.5rem;
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
    margin-top: 0.4rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryText};
    font-size: 0.8rem;
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
    margin-top: 0.4rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryText};
    font-size: 0.8rem;
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
    width: clamp(2rem, 5vw, 3.5rem);
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
    width: 12px;
  }

  img:hover {
    cursor: pointer;
  }

  img + img {
    margin-left: 0.5rem;
  }
`;
