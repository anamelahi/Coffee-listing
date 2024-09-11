import React from 'react'
import "./Page1.css"

const Buttons = ({ btntext, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>{btntext}</button>
  )
}

export default Buttons

