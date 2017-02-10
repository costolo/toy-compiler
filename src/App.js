import React, { Component } from 'react'
import { compiler } from './compiler'
import CodeBlock from './CodeBlock'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: ''
    }
    this.handleCodeSubmit = this.handleCodeSubmit.bind(this)
  }

  handleCodeSubmit (e) {
    e.preventDefault()
    this.setState({code: compiler(e.target.childNodes[0].value)})
  }

  render () {
    return (
      <div className='App'>
        <form className='codeForm' onSubmit={this.handleCodeSubmit}>
          <input className='codeInput' type='text' placeholder='write your code here' />
        </form>
        <div className='codeContainer'>
          <CodeBlock title='tokens' code={this.state.code.tokens}/>
          <CodeBlock title='abstract syntax tree' code={this.state.code.ast}/>
          <CodeBlock title='compiled code' code={this.state.code.output}/>
        </div>
      </div>
    )
  }
}

export default App
