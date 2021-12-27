import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Cart from "../components/cart/Cart";
import { useState } from "react";
import "../styles/globals.css";
import CartContextProvider from "../store/CartContextProvider";
import { SessionProvider } from "next-auth/react";

const themeLight = {
  color: {
    background: "#fcf9ee",
    navBackground: "rgb(252,249,238, 0.9)",
    backgroundFilter: "invert(1) sepia(1%) saturate(0%) hue-rotate(175deg);",
    footerBackground: "#FBF8EE",
    primaryAccent: "#e7d6c4",
    secondaryAccent: "#ddc92a",
    primaryText: "#141414",
    primaryTextFilter:
      "invert(0%) sepia(26%) saturate(4644%) hue-rotate(10deg);",
  },
  mobile: {
    pageLeftPadding: "1.5em",
    pageRightPadding: "2.5em",
    pageTopMargin: "8em",
  },
  layout: {
    small: {
      pageLeftPadding: "1.5em",
      pageRightPadding: "2.5em",
      pageTopMargin: "8em",
    },
    medium: {
      size: "768px",
      pageLeftPadding: "1.5em",
      pageRightPadding: "2.5em",
      pageTopMargin: "8em",
    },
    large: {
      size: "1200px",
      pageLeftPadding: "1.5em",
      pageRightPadding: "2.5em",
      pageTopMargin: "8em",
    },
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isCartShown, setIsCartShown] = useState(false);

  const onShowCart = () => {
    setIsCartShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <ThemeProvider theme={themeLight}>
      <SessionProvider session={session}>
        <CartContextProvider>
          {isCartShown && <Cart onHideCart={onShowCart} />}
          <GlobalStyles />
          <Navigation onShowCart={onShowCart} />
          <Component {...pageProps} />
          <Footer />
        </CartContextProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
