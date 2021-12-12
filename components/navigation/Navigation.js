import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import nav from "../../assets/icons/nav-icon.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import Link from "next/link";

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
      return !prevState;
    });
  };

  const NavMenu = (
    <StyledNavMenu>
      <StyledNavLinkTitle>Tabs</StyledNavLinkTitle>
      <StyledNavStoreLinks>
        <li>
          <Link href="/">Shop</Link>
        </li>
        <li>
          <Link href="/">Collections</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </StyledNavStoreLinks>
      <StyledNavInfoLinks>
        <li>
          <Link href="/">Faq</Link>
        </li>
        <li>
          <Link href="/">Returns</Link>
        </li>
        <li>
          <Link href="/">Terms</Link>
        </li>
        <li>
          <Link href="/">Privacy</Link>
        </li>
      </StyledNavInfoLinks>
      <StyledNavSocialLinks>
        <img src={facebookIcon.src} alt=""></img>
        <img src={instagramIcon.src} alt=""></img>
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
          <img src={logo.src} alt="logo"></img>
        </StyledLogo>
        <StyledNavIcon isVisible={isNavMenuShown}>
          <img src={nav.src} onClick={onNavHandler} alt="nav menu"></img>
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
