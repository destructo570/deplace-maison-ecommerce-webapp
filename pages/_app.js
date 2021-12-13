import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Cart from "../components/cart/Cart";
import { useContext, useEffect, useState } from "react";
import "../styles/globals.css";
import CartContextProvider from "../store/CartContextProvider";
import CartContext from "../store/cart-context";
import axios from "axios";

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
  },
};

function MyApp({ Component, pageProps }) {
  const [isCartShown, setIsCartShown] = useState(false);

  const onShowCart = () => {
    setIsCartShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <ThemeProvider theme={themeLight}>
      <CartContextProvider>
        {isCartShown && <Cart onHideCart={onShowCart} />}
        <GlobalStyles />
        <Navigation onShowCart={onShowCart} />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
