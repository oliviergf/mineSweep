import React, { useState, useEffect } from 'react'
import Board from './Board/Board'
import { generateBoard, traverseReveal } from '../assets/scripts/scripts'
import Button from './Button/Button'

function Game() {
  //menu to select size of map
  /* 
  {
    state: flag, hidden, revealed 
    content: '1-8', 'B', ''
  }
  */

  // const [theTime, setTheTime] = useState(0)
  const [gameSize, setGameSize] = useState(5)
  let size = gameSize
  const [gameFailed, setGameFailed] = useState(false)
  const [gameInstance, setGameInstance] = useState(generateBoard(size, size, 0.9))

  const clickedOnTile = (i, j) => {
    gameInstance[i][j].state = 'revealed'

    if (gameInstance[i][j].content === '') {
      traverseReveal(gameInstance, i, j)
    }
    if (gameInstance[i][j].content === 'B') {
      setGameFailed(true)
    }

    console.log('gameInstance after click')
    console.log(gameInstance)
    setGameInstance(gameInstance)
  }

  //this shoud trigged a new game
  const resetGame = () => {
    setGameFailed(false)
  }

  let content = (
    <div className="Game">
      <br />
      {gameFailed ? <div>you just failed this shit dawg</div> : ''}
      <div>
        <Board gameInstance={gameInstance} tileFunc={clickedOnTile} isDead={gameFailed} />
      </div>
      <div>
        Select the size of the game!
        <select
          onChange={event => {
            console.log(event.target.value)
            // setGameSize(event.target.value)
          }}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      {gameFailed ? <Button name={'restart the game'} clickFn={() => resetGame()} /> : ''}
    </div>
  )

  return content
}

export default Game
