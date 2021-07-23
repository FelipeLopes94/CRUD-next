import type { AppProps } from 'next/app'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
      <Component {...pageProps} />
      {/* <GlobalStyle/> */}
    </>
    )
}
export default MyApp
