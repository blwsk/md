import Post from '../components/Post.js'

export default props => {
  const post = props.url.query.post
  console.log(props)
  return post ? <Post post={post} /> : <Post />
}
