import React, { Component } from 'react'
const { string } = React.PropTypes

class CodeBlock extends Component {
  static propTypes = {
    code: string
  }

  render () {
    const { title, code } = this.props 
    return (
      <div className='codeBlock'>
        <h1>{title}</h1>
        <pre>
          <code>
            {JSON.stringify(code, null, 2)} 
          </code>
        </pre>
      </div>
    )
  }
}

export default CodeBlock
