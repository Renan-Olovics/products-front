import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-Roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={roboto.variable}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
