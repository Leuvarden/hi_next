import Document, { Head, Main, NextScript } from "next/document";
// import 'bootstrap/dist/css/bootstrap.min.css' as;

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>React Movies</title>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> */}
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}