import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Row from '../Row/Row'

function Board(props) {
  let content = (
    <div className="Board">
      {props.gameInstance.map((row, rowIndex) => {
        return (
          <div>
            <Row rowInstance={row} rowIndex={rowIndex} tileFunc={props.tileFunc} />
            <br />
          </div>
        )
      })}
    </div>
  )

  return content
}

export default Board
