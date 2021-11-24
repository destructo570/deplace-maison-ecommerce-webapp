import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
}

body{
    font-family: Almarai, sans-serif;
    background: ${({ theme }) => theme.colors.dirtyWhite};
    color: red;
}
`;

export default GlobalStyles;
