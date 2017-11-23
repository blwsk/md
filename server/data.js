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

function getPostId(pathname) {
  const params = pathname.split('/')

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

async function buildPostProps({ pathname }) {
  const id = getPostId(pathname)
  const post = await getPost(id)
  console.log(post)

  return { post }
}

module.exports = {
  buildPostProps: buildPostProps,
  buildEditorProps: buildPostProps,
}
