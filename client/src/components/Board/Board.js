import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Row from '../Row/Row'

function Board(props) {
  let content
  if (props.isDead) {
    content = <img src={require('../../assets/img/dead.jpg')} />
  } else {
    content = (
      <div className="Board">
        {props.gameInstance.map((row, rowIndex) => {
          return <Row rowInstance={row} rowIndex={rowIndex} tileFunc={props.tileFunc} />
        })}
      </div>
    )
  }

  return content
}

export default Board
