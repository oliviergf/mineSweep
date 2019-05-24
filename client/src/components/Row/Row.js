import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Tile from '../Tile/Tile'

function Row(props) {
  let row = props.rowInstance
  console.log(props.rowIndex)

  let content = (
    <div className="Board">
      {row.map((tileState, tileIndex) => {
        return <Tile currentState={tileState} position={[props.rowIndex, tileIndex]} tileFunc={props.tileFunc} />
      })}
    </div>
  )

  return content
}

export default Row
