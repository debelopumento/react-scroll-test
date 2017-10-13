import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Scroll from 'react-scroll'
import Test from './test'

const scroll = Scroll.animateScroll
class App extends Component {
  render() {
    //scroll.scrollMore(100)
    window.scrollTo(0, 150)
    return (
      <div
        className="App"
        style={{
          overflowY: 'auto',
        }}
      >
        <Test />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    )
  }
}

export default App
