import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`
            * {
              font-family: -apple-system,system-ui,BlinkMacSystemFont,sans-serif;
            }

            textarea, input {
              padding: 12px;
            }

            textarea {
              font-size: 24px;
              font-family: monospace;
            }

            textarea:focus,textarea:active {
              background: black;
              border: none;
              outline: none;
              color: white;
            }

            textarea.saved {
              background: green;
              color: white;
            }
          `}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
