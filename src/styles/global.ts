import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme['bg-color']};
    -webkit-font-smoothing: antialiased;
    -moz-asx-font-smoothing: grayscale;
  }

  body, input, label, textarea, button, a, h1, h2 {
    font: 400 1rem -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: ${props => props.theme['font-color']};
    border: 0;
    padding: 0;
    outline: 0;
  }
`;
