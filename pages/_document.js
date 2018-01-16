import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const BLACK = 'BLACK'
const WHITE = 'WHITE'
const MAGENTA = 'MAGENTA'
const GREEN = 'WHITESMOKE'

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
              outline: none;
              border: none;
              box-sizing: border-box;
            }

            html,
            body,
            div,
            span {
              margin: 0;
              padding: 0;
            }

            div[data-reactroot] {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              height: 100%;
            }

            small {
              text-transform: uppercase;
              font-weight: 300;
              font-size: 0.8rem;
              font-family: monospace;
            }

            p {
              line-height: 1.4em;
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
              font-size: 2rem;
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
            button.disabled,
            button.disabled:hover {
              opacity: 0.5;
            }

            .article {
              width: 900px;
              margin: 0 auto;
              font-size: 24px;
            }

            pre {
              background: ${BLACK};
              color: ${GREEN};
              font-size: 16px;
              padding: 40px;
            }
            code {
              font-family: monospace;
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
