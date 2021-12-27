import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import CartContextProvider from "../store/CartContextProvider";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";
import GlobalStyles from "../styles/globalStyles";

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
  layout: {
    maxWidth: "1000px",
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
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
