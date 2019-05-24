import React from 'react'

const Button = ({ clickFn, name }) => (
  <button className="btn" onClick={clickFn}>
    {name}
  </button>
)

export default Button
