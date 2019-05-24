import React, { useState, useEffect } from 'react'
import Board from './Board/Board'
import { generateBoard } from '../assets/scripts/scripts'

function Game() {
  //menu to select size of map

  /* 
  {
    state: flag, hidden, revealed 
    content: '1-8', 'B', ''
  }
  */

  console.log('generateBoard')
  console.log(generateBoard(5, 5))

  let initialGameInstance = [
    [{ state: 'hidden', content: '1' }, { state: 'hidden', content: '3' }],
    [{ state: 'hidden', content: 'B' }, { state: 'hidden', content: '2' }],
    [{ state: 'hidden', content: '1' }, { state: 'hidden', content: '3' }],
    [{ state: 'hidden', content: '1' }, { state: 'hidden', content: 'B' }],
    [{ state: 'hidden', content: '1' }, { state: 'hidden', content: '3' }]
  ] //initial 5x5 game

  const [gameSize, setGameSize] = useState(5)
  const [gameFailed, setGameFailed] = useState(false)
  const [gameInstance, setGameInstance] = useState(initialGameInstance)

  const clickedOnTile = (i, j) => {
    if (gameInstance[i][j].content === 'B') {
      setGameFailed(true)
    }

    gameInstance[i][j].state = 'revealed'
    setGameInstance(gameInstance)

    //logic of making a new move is here
    console.log('coming from Game! ')
    console.log(i)
    console.log(j)
  }

  let content = (
    <div className="Game">
      <br />
      {gameFailed ? <div>you just failed this shit dawg</div> : ''}
      <div>
        <Board gameInstance={gameInstance} tileFunc={clickedOnTile} />
      </div>
      <div>
        Select the size of the game!
        <select>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>
  )

  return content
}

export default Game
