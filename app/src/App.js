import "./App.css";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dirtyWhite: "#fcf9ee",
    creamPink: "#e7d6c4",
    sandGold: "#ddc92a",
    thatBlack: "#141414",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <header className="App-header">
          <p>HELLO WORLD</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
