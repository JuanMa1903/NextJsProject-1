import { AppProps } from "next/app";
import Layout from "./components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  // Providers Context/providers, theme, data
  //Layouts
  //props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
