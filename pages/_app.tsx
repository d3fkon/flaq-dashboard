import type { AppProps } from 'next/app'
import Layout from '../Layout/Layout'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  )
}

export default MyApp
