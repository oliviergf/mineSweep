import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Tile from './Tile/Tile'

function Game() {
  const [boardTiles, setBoardTiles] = useState('this is a boardt iles')

  // // Load the message only when the component mounts
  // useEffect(() => {
  //   getMessage()
  // }, [])

  // async function setBoardTiles(i) {
  //   const response = await axios.get('/api')
  //   setMessage(response.data)
  // }

  let content = (
    <div className="Game">
      This is a game 'instance' where we need to have the state of the entire board!!
      <br />
      {boardTiles}
      <div>
        <Tile />
      </div>
    </div>
  )

  return content
}

export default Game
