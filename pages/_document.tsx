import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            {/*favicon*/}
            {/*WebFont*/}
            {/*stylesheets*/}
            {/*scripts/js*/}
        </Head>
        <body className='my-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument