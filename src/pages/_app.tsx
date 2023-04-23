import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify'
import { AppProvider } from '@/contexts'

import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-Roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={roboto.variable}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <ToastContainer />
    </main>
  )
}

export default App
