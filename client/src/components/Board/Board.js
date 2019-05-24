import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Row from '../Row/Row'

function Board(props) {
  console.log('board props:')
  console.log(props)
  let content = (
    <div className="Board">
      {props.gameInstance.map((row, rowIndex) => {
        return <Row rowInstance={row} rowIndex={rowIndex} tileFunc={props.tileFunc} />
      })}
    </div>
  )

  return content
}

export default Board
