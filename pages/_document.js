import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server';
import React from 'react';
import PropTypes from 'prop-types';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
}

  render() {
    return (
      <html>
        <Head>
          <title>React Movies</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}