const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const PORT = 3000
const DEV = process.env.NODE_ENV !== 'production'

const app = next({ dev: DEV })
const handle = app.getRequestHandler()

const root = pathname => pathname === '/'
const editor = pathname => /\/editor/.test(pathname)
const post = pathname => !/_next/.test(pathname)

async function serve(req, res) {
  const parsedUrl = parse(req.url, true)
  const { pathname, query } = parsedUrl

  switch (true) {
    case root(pathname):
      return app.render(req, res, '/', query)

    case editor(pathname):
      return app.render(req, res, '/editor', query)

    case post(pathname):
      return app.render(req, res, '/post', query)

    default:
      handle(req, res, parsedUrl)
  }
}

function listen(err) {
  if (err) throw err

  console.log(process.env.BLAH)
  console.log(`> Ready on http://localhost:${PORT}`)
}

app.prepare().then(() => {
  createServer(serve).listen(PORT, listen)
})
