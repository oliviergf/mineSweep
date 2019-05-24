import React from 'react'
import Board from './Board/Board'
import { generateBoard, traverseReveal } from '../assets/scripts/scripts'
import Button from './Button/Button'
import _ from 'lodash'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameInstance: generateBoard(parseInt(props.size), parseInt(props.size), 0.5),
      gameFailed: false,
      gameSize: parseInt(props.size)
    }
  }
  clickedOnTile = (i, j) => {
    const instance = _.cloneDeep(this.state.gameInstance)
    instance[i][j].state = 'revealed'
    if (instance[i][j].content === '') {
      traverseReveal(instance, i, j)
    }
    if (instance[i][j].content === 'B') {
      this.setState({ gameFailed: true })
    }

    this.setState({ gameInstance: instance })
    console.log(this.state.gameInstance)
  }

  //this shoud trigged a new game
  resetGame = () => {
    this.setState((prevState, prevProps) => ({ gameFailed: false, gameInstance: generateBoard(prevState.gameSize, prevState.gameSize, 0.5) }))
  }

  continueGame = () => {
    this.setState({ gameFailed: false })
  }

  render() {
    let content = (
      <div className="Game">
        <br />
        {this.state.gameFailed ? <div>you just failed this</div> : ''}
        <div>
          <Board gameInstance={this.state.gameInstance} tileFunc={this.clickedOnTile.bind(this)} isDead={this.state.gameFailed} />
        </div>
        <div>
          Select the size of the game!
          <select
            onChange={event => {
              this.setState({ gameSize: event.target.value })
              this.resetGame()
              event.preventDefault()
            }}
          >
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <Button name={'reset the game'} clickFn={() => this.resetGame()} />
        {this.state.gameFailed ? <Button name={'continue the game'} clickFn={() => this.continueGame()} /> : ''}
      </div>
    )

    return content
  }
}

export default Game
