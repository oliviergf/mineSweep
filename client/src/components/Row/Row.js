import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Tile from '../Tile/Tile'

function Row(props) {
  let row = props.rowInstance

  let content = (
    <div className="Row">
      {row.map((tileState, tileIndex) => {
        return <Tile key={tileIndex} currentState={tileState} position={[props.rowIndex, tileIndex]} tileFunc={props.tileFunc} />
      })}
      <br />
    </div>
  )

  return content
}

export default Row
