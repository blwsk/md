import { Object } from 'core-js/library/web/timers'

const ROUTES = ['editor', 'post']
const POSTS = {
  ['post-one']: {
    id: 'post-one',
    title: 'Post one',
    text: '# Post one\nHere is some text',
    createdAt: Date.now(),
    published: false,
  },
  ['post-two']: {
    id: 'post-two',
    title: 'Post two',
    text: `
# Bridgewater

This thought re: Bridgewater is interesting, but not in how it relates to the hedge fund:

> One stylized model for thinking about Bridgewater is that it is run by the computer with absolute logic and efficiency; in this model, the computer's main problem is keeping the 1,500 human employees busy so that they don't interfere with its perfect rationality.

If (or rather when) companies are run mostly by intelligent systems, it's possible that the point at which the company still needs all of its employees and the point at which it needs almost none of them are very close together in time. Those points in time could be so close together that all the employees are still employed by the company even though their labor is obsolete. This will require the company to "keep them busy" lest their unrest grow unmanageable.

\`\`\`
export function createVisitorThread({ sessionId, uuid, messageId }) {
  return noAuthHttp.post(\`\$\{MESSAGES_API_PREFIX}/thread/visitor\`, {
    query: {
      sessionId,
      uuid,
      welcomeMessageId: messageId,
      portalId: PortalIdParser.get(),
    },
  });
}
\`\`\`

Even if you think such systems will make obsolete specific organizations in isolation (e.g. software development or marketing or accounting), those particular orgs are most likely large enough that my point still applies.

When a company wants to replace an existing system (in this case, an organization of people) with a new, better system, it does so incrementally and with redundancy in place. If the new system doesn't meet requirements, it has the ability to roll back and reevaluate. Thusly, the company must keep on staff a majority of the eventually obsolete workers until the transition is complete. Only after the transition is complete and robust will they be without jobs. This applies in practicality and in terms of PR, also. Any company that fires an entire business org, effectively disrupting not itself but the very class of worker it employed is going to face some backlash. This is similar, but worse to the outsourcing trend domestic manufacturing has faced. Outsourcing in this sense involves taking a job from a domestic employee and giving it to a human in a cheaper labor market. This is a lot like that, but instead of giving the job to a human, you're giving it to a machine. That is much greater an existential threat.    
    `,
    createdAt: Date.now(),
    published: false,
  },
}
const NEW_POST = {
  id: '',
  title: '',
  text: '',
  createdAt: Date.now(),
  published: false,
}

function getNewPost(id) {
  return Object.assign({}, NEW_POST, { id })
}

function getPostId(url) {
  const params = url.split('/')

  const withoutRouteComponents = params.filter(Boolean)

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

function savePost(post) {
  return new Promise(resolve => resolve(post))
}

module.exports = {
  getPostProps,
  getEditorProps,
  savePost,
}
