import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Oscar Luna's Art Gallery"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Oscar Luna's Art Gallery"
          />
          <meta property="og:title" content="Oscar Luna's Art Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Oscar Luna's Art Gallery" />
          <meta
            name="twitter:description"
            content="Oscar Luna's Art Gallery"
          />
        </Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8PRS26B2Y8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8PRS26B2Y8');
</script>
        <body className="antialiased bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
