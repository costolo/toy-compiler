import React, { Component } from 'react'
import { compiler } from './compiler'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>{compiler('(add 3 4 1)')}</h1>
      </div>
    )
  }
}

export default App
