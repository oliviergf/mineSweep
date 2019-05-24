import React, { useState, useEffect } from 'react'

const Tile = props => {
  let callGameFunction = () => {
    //calls the func in game component
    props.tileFunc(props.position[0], props.position[1])

    //ajust its state with the new props
    setTileContent(props.currentState.content)
    setTileState(props.currentState.state)
  }

  const [tileState, setTileState] = useState(props.currentState.state)
  const [tileContent, setTileContent] = useState(props.currentState.content)

  let content = (
    //props.position = [i,j]
    <div className={tileState} onClick={callGameFunction}>
      {tileState === 'revealed' ? tileContent : ':)'}
    </div>
  )

  return content
}

export default Tile
