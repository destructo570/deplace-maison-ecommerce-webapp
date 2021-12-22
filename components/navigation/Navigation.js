import { useContext, useState } from "react";
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
import CartContext from "../../store/cart-context";
import { useRouter } from "next/router";

function Navigation(props) {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);
  const onNavHandler = () => {
    setIsNavMenuShown((prevState) => {
      return !prevState;
    });
  };

  const navLogoHandler = () => {
    router.push("/");
  };

  const shopLinkHandler = (event) => {
    event.preventDefault();
    router.push("/products");
    onNavHandler();
  };

  const NavMenu = (
    <StyledNavMenu>
      <StyledNavLinkTitle>Tabs</StyledNavLinkTitle>
      <StyledNavStoreLinks>
        <li>
          <p onClick={shopLinkHandler}>Shop</p>
        </li>
        <li>
          <p>Collections</p>
        </li>
        <li>
          <p>About</p>
        </li>
      </StyledNavStoreLinks>
      <StyledNavInfoLinks>
        <li>
          <Link href="/faq">Faq</Link>
        </li>
        <li>
          <Link href="/returns">Returns</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
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
        <StyledLogo onClick={navLogoHandler} isVisible={isNavMenuShown}>
          <img src={logo.src} alt="logo"></img>
        </StyledLogo>
        <StyledNavIcon isVisible={isNavMenuShown}>
          <img src={nav.src} onClick={onNavHandler} alt="nav menu"></img>
        </StyledNavIcon>
        <StyledCartItem>
          <div onClick={props.onShowCart}>
            Cart <span> {cartCtx.totalItems}</span>
          </div>
        </StyledCartItem>
      </StyledNavigationBar>
      {isNavMenuShown && NavMenu}
    </StyledNavigation>
  );
}

export default Navigation;
