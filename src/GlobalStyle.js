import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,html {
    width: 100%;
    height: 100%;
    font-family: 'Sunflower', 'sans-serif';
    line-height: 1.5;
  }

  
`;

export default GlobalStyle;
