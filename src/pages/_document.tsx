import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en" data-mode="light">
      <Head />
      <body className="bg-primary-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
