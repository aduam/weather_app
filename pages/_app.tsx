import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
