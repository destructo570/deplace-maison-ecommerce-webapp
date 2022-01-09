import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import CartContextProvider from "../store/CartContextProvider";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";
import GlobalStyles, { themeLight } from "../styles/globalStyles";

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
