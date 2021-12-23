import { useContext, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import nav from "../../assets/icons/nav-icon.svg";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  StyledCartItem,
  StyledLogo,
  StyledNavIcon,
  StyledNavigation,
  StyledNavigationBar,
  StyledLoginButton,
} from "./styledComponents";
import CartContext from "../../store/cart-context";
import { useRouter } from "next/router";
import NavMenu from "./NavMenu";

function Navigation(props) {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const { data: session } = useSession();
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);
  const onNavHandler = () => {
    setIsNavMenuShown((prevState) => {
      return !prevState;
    });
  };

  const navLogoHandler = () => {
    router.push("/");
  };

  return (
    <StyledNavigation isVisible={isNavMenuShown}>
      <StyledNavigationBar>
        <StyledLogo onClick={navLogoHandler} isVisible={isNavMenuShown}>
          <img src={logo.src} alt="logo"></img>
        </StyledLogo>
        <StyledNavIcon isVisible={isNavMenuShown}>
          <img src={nav.src} onClick={onNavHandler} alt="nav menu"></img>
        </StyledNavIcon>
        <StyledLoginButton onClick={!session ? signIn : signOut}>
          {!session ? "Login" : "Logout"}
        </StyledLoginButton>
        <StyledCartItem>
          <div onClick={props.onShowCart}>
            Cart <span> {cartCtx.totalItems}</span>
          </div>
        </StyledCartItem>
      </StyledNavigationBar>
      {isNavMenuShown && <NavMenu onNavClick={onNavHandler} />}
    </StyledNavigation>
  );
}

export default Navigation;
