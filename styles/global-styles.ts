import { createGlobalStyle, ThemeProvider } from 'styled-components';

interface Color {
  primary: string;
}

interface Theme {
  colors: Color;
}

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: rgba(0, 0, 0, 0.05);
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme: Theme = {
  colors: {
    primary: '#F24D03',
  },
};