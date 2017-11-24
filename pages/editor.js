import React from 'react'
import Editor from '../components/Editor.js'
import { getEditorProps } from '../server/data.js'

class EditorPage extends React.Component {
  static async getInitialProps({ req }) {
    if (!req) return
    return getEditorProps(req)
  }

  render() {
    return <Editor post={this.props.post} />
  }
}

export default EditorPage
