import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'

import type { AppProps } from 'next/app'
import { GlobalStyles } from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
