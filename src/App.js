import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import Collections from "./components/collections/Collections";
import Navigation from "./components/navigation/Navigation";
import ScrollingDivider from "./components/scrollingDivider/ScrollingDivider";
import PromoInfo from "./components/PromoInfo/PromoInfo";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

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
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <GlobalStyles />
        <Navigation />
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
