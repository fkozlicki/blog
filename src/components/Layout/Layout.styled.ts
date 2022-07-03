import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --mobileS: 320px;
    --mobileM: 375px;
    --mobileL: 425px;
    --tablet: 768px;
    --laptop: 1024px;
    --laptopL: 1440px;
    --destop: 2560px  
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Rubik', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
    color: initial;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;
