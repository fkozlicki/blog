import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
  input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
  }
`;
