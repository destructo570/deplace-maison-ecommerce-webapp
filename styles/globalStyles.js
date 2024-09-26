import { createGlobalStyle } from "styled-components";

export const themeLight = {
  color: {
    background: "#00ab39",
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
      pageRightPadding: "1.5em",
      pageTopMargin: "8em",
    },
    medium: {
      size: "768px",
      pageLeftPadding: "1.5em",
      pageRightPadding: "1.5em",
      pageTopMargin: "8em",
    },
    large: {
      size: "1200px",
      pageLeftPadding: "1.5em",
      pageRightPadding: "1.5em",
      pageTopMargin: "8em",
    },
  },
};

export const themeDark = {
  color: {
    background: "#141414",
    navBackground: "#141414",
    backgroundFilter: "invert(0) sepia(0%) saturate(100%) hue-rotate(-175deg);",
    footerBackground: "#141414",
    primaryAccent: "#e7d6c4",
    secondaryAccent: "#e7d6c4",
    primaryText: "#fcf9ee",
    primaryTextFilter:
      "invert(0%) sepia(26%) saturate(4644%) hue-rotate(10deg);",
  },
  layout: {
    maxWidth: "1000px",
    small: {
      pageLeftPadding: "1.5em",
      pageRightPadding: "1.5em",
      pageTopMargin: "8em",
    },
    medium: {
      size: "768px",
      pageLeftPadding: "1.5em",
      pageRightPadding: "1.5em",
      pageTopMargin: "8em",
    },
    large: {
      size: "1200px",
      pageLeftPadding: "1.5em",
      pageRightPadding: "1.5em",
      pageTopMargin: "8em",
    },
  },
};

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    position: relative;
    font-family: "Favorit", sans-serif; 
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
}

img{
    width: 100%;
}


`;

export default GlobalStyles;
