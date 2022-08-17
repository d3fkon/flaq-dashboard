import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Button } from '../common/Button'

function MyApp({ Component, pageProps }: AppProps) {
  // const [darkMode, setDarkMode] = useState(false)
  return <Component {...pageProps} />
}

export default MyApp
