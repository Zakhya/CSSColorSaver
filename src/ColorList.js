import React from 'react'

const ColorList = ({ handleDelete, newColor, setSquareColor }) => {
  return (
    <main>
    { newColor.length ? (
        <ul>
            {newColor.map((color) => (
            <li className="color" key={color.id}>
            <p onClick={() => setSquareColor(color.color)}>{color.color}</p>
            <button className="delete" onClick={() => handleDelete(color.id)}>Delete</button>
            </li>
        ))}
        </ul>
    ) : (
        <p className="p">No Colors</p>
    )}
    </main>
  )
}

export default ColorList 