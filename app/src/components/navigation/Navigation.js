import logo from "../../assets/icons/logo.svg";
import nav from "../../assets/icons/nav-icon.svg";

import {
  StyledCartItem,
  StyledLogo,
  StyledNavIcon,
  StyledNavigation,
} from "./styledComponents";

function Navigation() {
  return (
    <StyledNavigation>
      <StyledLogo href="#">
        <img src={logo} alt="logo"></img>
      </StyledLogo>
      <StyledNavIcon>
        <img src={nav} alt="nav menu"></img>
      </StyledNavIcon>
      <StyledCartItem>
        Cart <span> 0</span>
      </StyledCartItem>
    </StyledNavigation>
  );
}

export default Navigation;
