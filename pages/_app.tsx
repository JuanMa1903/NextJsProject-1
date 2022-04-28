import {AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    // Providers Context/providers, theme, data
    //Layouts
    //props adicionales
    return <Component {...pageProps} />
  }
  
  export default MyApp