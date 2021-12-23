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

function NavMenu(props) {
  const router = useRouter();

  const shopLinkHandler = (event) => {
    event.preventDefault();
    router.push("/products");
    props.onNavClick();
  };
  return (
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
}

export default NavMenu;
