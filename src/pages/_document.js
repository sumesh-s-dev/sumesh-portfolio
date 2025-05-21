import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/assets/favicon.ico" />
          <meta name="description" content="Sumesh's Portfolio - Full Stack Developer" />
          <meta name="keywords" content="portfolio, developer, web development, full stack" />
          <meta name="author" content="Sumesh" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;