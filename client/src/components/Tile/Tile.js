import React from 'react'

const Tile = props => (
  <div className={props.currentState.state} onClick={() => props.tileFunc(props.position[0], props.position[1])}>
    {props.currentState.state === 'revealed' ? props.currentState.content : ':)'}
  </div>
)

export default Tile
