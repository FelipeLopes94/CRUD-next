import type { AppProps } from 'next/app'
import '../styles/formStyles.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
      <Component {...pageProps} />
      {/* <GlobalStyle/> */}
    </>
    )
}
export default MyApp
