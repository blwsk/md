import React from 'react'
import Post from '../lib/js/re/components/Post.js'
import { getPostProps } from '../server/data.js'

class PostPage extends React.Component {
  static async getInitialProps({ req }) {
    if (!req) return
    return getPostProps(req)
  }

  render() {
    return <Post post={this.props.post} />
  }
}

export default PostPage
