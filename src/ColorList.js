import React from 'react'

const ColorList = ({ handleDelete, newColor, setSquareColor }) => {
  return (
    <main>
    { newColor.length ? (
        <ul>
            {newColor.map((color) => (
            <li className="color"  onClick={() => setSquareColor(color.color)} key={color.id} style={{background: color.color}}>
            <p className= "listItem">{color.color}</p>
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