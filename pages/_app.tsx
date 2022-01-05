import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from '../styles/global-styles';
import { ItemsProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ItemsProvider>
          <Component {...pageProps} />
        </ItemsProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp
