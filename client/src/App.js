import React from 'react'
import './App.css'
import axios from 'axios'
import Game from './components/Game'
import Button from './components/Button/Button'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
    }
  }

  render() {
    let menu = this.state.play ? <Game size={5} /> : <div>...</div>
    return (
      <div className="App">
        <header className="App-header">
          This is a mine fucking sweeper game!
          <div>
            <Button name={'Damn Button'} clickFn={() => this.setState({ play: true })} />
          </div>
          {menu}
        </header>
      </div>
    )
  }
}

export default App
