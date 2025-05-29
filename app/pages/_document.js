import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-base text-text font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
