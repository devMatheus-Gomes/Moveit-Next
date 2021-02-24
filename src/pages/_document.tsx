// Como se fosse o index.html do create react-app
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>  {/*para simular o Head do html padrão*/}
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" />
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
      </Html>
    );
  }
}