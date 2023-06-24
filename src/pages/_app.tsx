import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'

import type { AppProps } from 'next/app'
import { GlobalStyles } from '@/styles/global'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
