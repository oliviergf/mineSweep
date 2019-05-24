import React from 'react'

const Button = ({ clickFn, name }) => {
  return <button onClick={clickFn}>{name}</button>
}

export default Button
