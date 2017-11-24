import { Object } from 'core-js/library/web/timers'

const ROUTES = ['editor', 'post']
const POSTS = {
  ['post-one']: {
    id: 'post-one',
    title: 'Post one',
    text: '# Post one\nHere is some text',
    timestamp: Date.now(),
  },
  ['post-two']: {
    id: 'post-two',
    title: 'Post two',
    text: '# Post two\nHere is some more text',
    timestamp: Date.now(),
  },
}
const NEW_POST = {
  id: '',
  title: '',
  text: '',
  timestamp: Date.now(),
}

function getNewPost(id) {
  return Object.assign({}, NEW_POST, { id })
}

function getPostId(url) {
  const params = url.split('/')

  const withoutRouteComponents = params.filter(param => !!param)

  return withoutRouteComponents.length > 0
    ? withoutRouteComponents[withoutRouteComponents.length - 1]
    : undefined
}

function getPost(id) {
  return new Promise(resolve => {
    const post = POSTS[id]
    resolve(post)
  })
}

async function getPostProps({ url }) {
  const id = getPostId(url)
  const post = await getPost(id)

  return { post }
}

async function getEditorProps({ url }) {
  const id = getPostId(url)
  const post = (await getPost(id)) || getNewPost(id)

  return { post }
}

module.exports = {
  getPostProps,
  getEditorProps,
}
