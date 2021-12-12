import { createGlobalStyle } from "styled-components";

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
