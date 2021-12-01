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
import CartProvider from "./store/CartProvider";

const themeLight = {
  color: {
    background: "#fcf9ee",
    backgroundFilter: "invert(1) sepia(1%) saturate(0%) hue-rotate(175deg);",
    footerBackground: "#FBF8EE",
    primaryAccent: "#e7d6c4",
    secondaryAccent: "#ddc92a",
    primaryText: "#141414",
    primaryTextFilter:
      "invert(0%) sepia(26%) saturate(4644%) hue-rotate(10deg);",
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
      <CartProvider>
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
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
