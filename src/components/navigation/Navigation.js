import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import nav from "../../assets/icons/nav-icon.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

import {
  StyledCartItem,
  StyledLogo,
  StyledNavIcon,
  StyledNavigation,
  StyledNavigationBar,
  StyledNavInfoLinks,
  StyledNavInquiry,
  StyledNavLinkTitle,
  StyledNavMenu,
  StyledNavSocialLinks,
  StyledNavStoreLinks,
} from "./styledComponents";

function Navigation(props) {
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);
  const onNavHandler = () => {
    setIsNavMenuShown((prevState) => {
      return prevState ? false : true;
    });
  };

  const NavMenu = (
    <StyledNavMenu>
      <StyledNavLinkTitle>Tabs</StyledNavLinkTitle>
      <StyledNavStoreLinks>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Collections</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </StyledNavStoreLinks>
      <StyledNavInfoLinks>
        <li>
          <a href="/">Faq</a>
        </li>
        <li>
          <a href="/">Returns</a>
        </li>
        <li>
          <a href="/">Terms</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
      </StyledNavInfoLinks>
      <StyledNavSocialLinks>
        <img src={facebookIcon} alt=""></img>
        <img src={instagramIcon} alt=""></img>
      </StyledNavSocialLinks>
      <StyledNavInquiry>
        Inquiries <br /> info@deplacemaison.com
      </StyledNavInquiry>
    </StyledNavMenu>
  );
  return (
    <StyledNavigation isVisible={isNavMenuShown}>
      <StyledNavigationBar>
        <StyledLogo href="#" isVisible={isNavMenuShown}>
          <img src={logo} alt="logo"></img>
        </StyledLogo>
        <StyledNavIcon isVisible={isNavMenuShown}>
          <img src={nav} onClick={onNavHandler} alt="nav menu"></img>
        </StyledNavIcon>
        <StyledCartItem>
          <div onClick={props.onShowCart}>
            Cart <span> 0</span>
          </div>
        </StyledCartItem>
      </StyledNavigationBar>
      {isNavMenuShown && NavMenu}
    </StyledNavigation>
  );
}

export default Navigation;
