import React from 'react'

const Tile = props => {
  let callGameFunction = () => {
    console.log('calling from tile')
    props.tileFunc(props.position[0], props.position[1])
  }
  let content = (
    //props.position = [i,j]
    <div className="tile" onClick={callGameFunction}>
      {props.currentState}
    </div>
  )

  return content
}

export default Tile
