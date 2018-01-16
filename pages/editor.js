import React from 'react'
import Editor from '../lib/js/re/components/Editor.js'
import { getEditorProps, savePost } from '../server/data.js'

class EditorPage extends React.Component {
  static async getInitialProps({ req }) {
    if (!req) return
    return getEditorProps(req)
  }

  render() {
    return <Editor post={this.props.post} savePost={savePost} />
  }
}

export default EditorPage
