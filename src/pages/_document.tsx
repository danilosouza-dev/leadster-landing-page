import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Plus+Jakarta+Sans:wght@200;500;700&display=swap"
          rel="stylesheet"
        />
        <title>
          Leadster: Chatbot de Marketing para Aumentar Geração de Leads
        </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
