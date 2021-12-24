import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  top: 0px;
  z-index: 101;
  width: 100%;
  height: ${({ isVisible }) => (isVisible ? "100%" : "auto")};
  background-color: ${({ isVisible, theme }) =>
    isVisible ? theme.color.primaryText : theme.color.navBackground};
  color: ${({ isVisible, theme }) =>
    isVisible ? theme.color.background : theme.color.primaryText};
`;

export const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
`;

export const StyledLogo = styled.div`
  width: 80px;
  filter: ${({ isVisible, theme }) =>
    isVisible ? theme.color.backgroundFilter : theme.color.primaryTextFilter};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledNavIcon = styled.div`
  width: 40px;

  &:hover {
    cursor: pointer;
  }

  filter: ${({ isVisible, theme }) =>
    isVisible ? theme.color.backgroundFilter : theme.color.primaryTextFilter};
`;

export const StyledCartItem = styled.div`
  text-transform: uppercase;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 0.7rem;
    position: absolute;
    bottom: 0px;
    right: -10px;
    background-color: ${({ isVisible, theme }) =>
      isVisible ? theme.color.background : theme.color.primaryText};
    color: ${({ isVisible, theme }) =>
      isVisible ? theme.color.primaryText : theme.color.background};
    border-radius: 50px;
    padding: 0.2em 0.4em;
  }

  img {
    filter: ${({ isVisible, theme }) =>
      isVisible ? theme.color.backgroundFilter : theme.color.primaryTextFilter};
  }
`;

export const StyledNavMenu = styled.div`
  background-color: ${({ theme }) => theme.color.primaryText};
  padding: 1.6em;
  color: ${({ theme }) => theme.color.background};
  text-transform: uppercase;
  overflow: hidden;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.background};
  }
`;

export const StyledNavLinkTitle = styled.p`
  margin-top: 4.2em;
  padding-bottom: 0.3em;
  border-bottom: 1.5px solid ${({ theme }) => theme.color.background};
`;

export const StyledNavStoreLinks = styled.ul`
  margin: 2em 0;
  p {
    font-size: 2.5rem;
    font-weight: 600;
  }
  p:hover {
    cursor: pointer;
  }
`;

export const StyledNavInfoLinks = styled.ul`
  margin: 4.2em 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: space-evenly;
  grid-gap: 1em;

  p {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p:hover {
    cursor: pointer;
  }
`;

export const StyledNavSocialLinks = styled.div`
  margin-top: 8.2em;
  img {
    filter: invert(1) sepia(1%) saturate(0%) hue-rotate(175deg);
    max-width: 35px;
  }

  img:hover {
    cursor: pointer;
  }

  img + img {
    margin-left: 1em;
  }
`;

export const StyledNavInquiry = styled.div`
  margin-top: 2.2em;
  margin-bottom: 3em;
  padding: 0.8em 0;
  text-transform: none;
  font-size: 1.4rem;
  font-weight: 600;
  border-top: 1.5px solid ${({ theme }) => theme.color.background};
  border-bottom: 1.5px solid ${({ theme }) => theme.color.background};
`;

export const StyledLoginButton = styled.p`
  text-transform: uppercase;
  border: none;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
