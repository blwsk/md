const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { buildEditorProps, buildPostProps } = require('./data')

const PORT = 3000
const DEV = process.env.NODE_ENV !== 'production'

const app = next({ dev: DEV })
const handle = app.getRequestHandler()

async function serve(req, res) {
  // Be sure to pass `true` as the second argument to `url.parse`.
  // This tells it to parse the query portion of the URL.
  const parsedUrl = parse(req.url, true)
  const { pathname, query } = parsedUrl

  switch (true) {
    case pathname === '/':
      return app.render(req, res, '/', query)

    case /\/editor/.test(pathname):
      return app.render(req, res, '/editor', await buildEditorProps({ pathname, query }))

    case !/_next/.test(pathname):
      return app.render(req, res, '/post', await buildPostProps({ pathname, query }))

    default:
      handle(req, res, parsedUrl)
  }
}

function listen(err) {
  if (err) throw err

  console.log(`> Ready on http://localhost:${PORT}`)
}

app.prepare().then(() => {
  createServer(serve).listen(PORT, listen)
})
