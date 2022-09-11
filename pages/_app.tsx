import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Layout/Layout'
import { wrapper, store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
