import React from 'react'

function Input({ colorValues, setSquareColor, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="addItem"> Add Color Name</label>
    <input 
    autoFocus
    type="text"
    placeholder="Add color name"
    required
    value={colorValues}
    onChange={(e) => setSquareColor(e.target.value)}
    />
    <button
    type='submit'
    >Add Color to list</button>
    </form>
  )
}

export default Input