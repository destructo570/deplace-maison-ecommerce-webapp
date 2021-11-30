import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Collections from "./components/collections/Collections";
import Navigation from "./components/navigation/Navigation";
import ScrollingDivider from "./components/scrollingDivider/ScrollingDivider";
import PromoInfo from "./components/PromoInfo/PromoInfo";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import { useState } from "react";

const themeLight = {
  color: {
    background: "#fcf9ee",
    footerBackground: "#FBF8EE",
    primaryAccent: "#e7d6c4",
    secondaryAccent: "#ddc92a",
    primaryText: "#141414",
  },
};

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const onShowCart = () => {
    setIsCartShown(true);
  };
  const onHideCart = () => {
    setIsCartShown(false);
  };
  return (
    <ThemeProvider theme={themeLight}>
      {isCartShown && <Cart onHideCart={onHideCart} />}
      <div className="App">
        <GlobalStyles />
        <Navigation onShowCart={onShowCart} />
        <main>
          <Collections />
          <ScrollingDivider />
          <PromoInfo />
          <Testimonials />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
