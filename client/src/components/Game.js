import React, { useState, useEffect } from 'react'
import Board from './Board/Board'

function Game() {
  //menu to select size of map
  let initialGameInstance = [[0, 0, 0, 5, 0], [0, 0, 0, 0, 0], [0, 0, 0, 7, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]] //initial 5x5 game

  const [gameSize, setGameSize] = useState(5)
  const [gameInstance, setGameInstance] = useState([])

  const tileMessaging = (i, j) => {
    console.log('comming from Game! ')
    console.log(i)
    console.log(j)
  }

  let content = (
    <div className="Game">
      This is a game 'instance' where we need to have the state of the entire board !!
      <br />
      <div>
        <Board gameInstance={initialGameInstance} tileFunc={tileMessaging} />
      </div>
      <div>
        Select the size of the game!
        <select onChange={event => setGameSize(event.target.value)}>
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
