import {
  StyledNavInfoLinks,
  StyledNavInquiry,
  StyledNavLinkTitle,
  StyledNavMenu,
  StyledNavSocialLinks,
  StyledNavStoreLinks,
} from "./styledComponents";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

function NavMenu(props) {
  const router = useRouter();
  const { data: session } = useSession();

  const closeNav = () => {
    props.onNavClick();
  };

  const shopLinkHandler = (event) => {
    event.preventDefault();
    router.push("/products");
    props.onNavClick();
  };

  const myOrderLinkHandler = (event) => {
    event.preventDefault();
    router.push("/my-orders");
    closeNav();
  };

  const faqLinkHandler = (event) => {
    event.preventDefault();
    router.push("/faq");
    closeNav();
  };

  const returnsLinkHandler = (event) => {
    event.preventDefault();
    router.push("/returns");
    closeNav();
  };

  const termsLinkHandler = (event) => {
    event.preventDefault();
    router.push("/terms");
    closeNav();
  };

  const privacyLinkHandler = (event) => {
    event.preventDefault();
    router.push("/privacy");
    closeNav();
  };

  return (
    <StyledNavMenu>
      <StyledNavLinkTitle>Tabs</StyledNavLinkTitle>
      <StyledNavStoreLinks>
        <li>
          <p onClick={shopLinkHandler}>Shop</p>
        </li>
        <li>
          <p onClick={myOrderLinkHandler}>My Orders</p>
        </li>
        <li>
          <p onClick={!session ? signIn : signOut}>
            {!session ? "Login" : "Logout"}
          </p>
        </li>
        <li>
          <p>About</p>
        </li>
      </StyledNavStoreLinks>
      <StyledNavInfoLinks>
        <li>
          <p onClick={faqLinkHandler}>Faq</p>
        </li>
        <li>
          <p onClick={returnsLinkHandler}>Returns</p>
        </li>
        <li>
          <p onClick={termsLinkHandler}>Terms</p>
        </li>
        <li>
          <p onClick={privacyLinkHandler}>Privacy</p>
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
}

export default NavMenu;
