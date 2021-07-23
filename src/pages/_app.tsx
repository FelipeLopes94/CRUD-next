import type { AppProps } from 'next/app'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  <link rel="icon" href="./images/crud.png" />

  return(
    <>
      <Component {...pageProps} />
      {/* <GlobalStyle/> */}
    </>
    )
}
export default MyApp
