import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const BLACK = 'BLACK'
const WHITE = 'WHITE'
const MAGENTA = 'MAGENTA'

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
              margin: 0;
              padding: 0;
              outline: none;
              border: none;
              box-sizing: border-box;
            }

            div[data-reactroot] {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              height: 100%;
            }

            ::selection {
              background-color: ${MAGENTA};
            }

            textarea, input, button {
              padding: 12px;
            }
            
            textarea {
              width: inherit;
              height: inherit;
              background: ${BLACK};
              color: ${WHITE};
              font-size: 24px;
              caret-color: ${MAGENTA};
            }

            button {
              background: ${MAGENTA};
              color: ${WHITE};
              text-transform: uppercase;
              cursor: pointer;
            }
            button:hover {
              opacity: 0.9;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
