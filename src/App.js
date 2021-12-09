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
import { useEffect, useState } from "react";
import PromoProducts from "./components/promoProducts/PromoProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart";

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

let isInitial = true;

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cartState));
  }, [cartState, dispatch]);
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
          <PromoProducts />
          <Testimonials />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
