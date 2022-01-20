import {
  StyledLink,
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
import { motion } from "framer-motion";

const navVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0vh",
    transition: {
      duration: 0.5,
      ease: "easeIn",
      while: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const linksVariant = {
  hidden: {
    position: "absolute",
    bottom: "-500px",
    left: "0px",
  },
  visible: {
    bottom: "0px",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const otherVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

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
    <StyledNavMenu
      isNavShown={props.isNavShown}
      initial="hidden"
      animate="visible"
      variants={navVariant}
    >
      <StyledNavLinkTitle>Tabs</StyledNavLinkTitle>
      <StyledNavStoreLinks>
        <li>
          <motion.p onClick={shopLinkHandler} variants={linksVariant}>
            Shop
          </motion.p>
        </li>
        <li>
          <motion.p onClick={myOrderLinkHandler} variants={linksVariant}>
            My Orders
          </motion.p>
        </li>
        <li>
          <motion.p
            onClick={!session ? signIn : signOut}
            variants={linksVariant}
          >
            {!session ? "Login" : "Logout"}
          </motion.p>
        </li>
        <li>
          <motion.p variants={linksVariant}>About</motion.p>
        </li>
      </StyledNavStoreLinks>
      <StyledNavInfoLinks>
        <li>
          <motion.p onClick={faqLinkHandler} variants={linksVariant}>
            Faq
          </motion.p>
        </li>
        <li>
          <motion.p onClick={returnsLinkHandler} variants={linksVariant}>
            Returns
          </motion.p>
        </li>
        <li>
          <motion.p onClick={termsLinkHandler} variants={linksVariant}>
            Terms
          </motion.p>
        </li>
        <li>
          <motion.p onClick={privacyLinkHandler} variants={linksVariant}>
            Privacy
          </motion.p>
        </li>
      </StyledNavInfoLinks>
      <StyledNavSocialLinks variants={otherVariant}>
        <img src={facebookIcon.src} alt=""></img>
        <img src={instagramIcon.src} alt=""></img>
      </StyledNavSocialLinks>
      <StyledNavInquiry variants={otherVariant}>
        Inquiries <br /> info@deplacemaison.com
      </StyledNavInquiry>
    </StyledNavMenu>
  );
}

export default NavMenu;
