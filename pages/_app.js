import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/Layout";
import GlobalStyles, { themeLight } from "../styles/globalStyles";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <SessionProvider session={session}>       
          <Layout>
          <AnimatePresence mode="wait">
  <Component {...pageProps} key={router.route} />
</AnimatePresence>
          </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
