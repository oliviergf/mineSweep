import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Game from './components/Game'
import Button from './components/Button/Button'

function App() {
  // const [message, setMessage] = useState('...')

  const [play, setPlay] = useState(true)

  // // Load the message only when the component mounts
  // useEffect(() => {
  //   getMessage()
  // }, [])

  // async function getMessage() {
  //   const response = await axios.get('/api')
  //   setMessage(response.data)
  // }

  let menu = play ? <Game /> : <div>...</div>
  return (
    <div className="App">
      <header className="App-header">
        This is a mine fucking sweeper game!
        <div>
          <Button name={'Damn Button'} clickFn={() => setPlay(true)} />
        </div>
        {menu} hello
      </header>
    </div>
  )
}

export default App
