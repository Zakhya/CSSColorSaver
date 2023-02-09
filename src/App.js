import Header from './Header.js'
import ColorList from './ColorList.js'
import Square from './Square.js'
import Input from './Input.js'
import { useState } from 'react'


function App() {
  const [colorValues, setSquareColor] = useState('')
  const [currentColor, setCurrentColor] = useState('')
const [newColor, setNewColor] = useState(JSON.parse(localStorage.getItem('colorList')))

  const addColor = (color) => {
    const id = newColor.length ? newColor[newColor.length - 1].id + 1 : 1;
    const newItem = {id, color}
    const newColors = [...newColor, newItem]
    localStorage.setItem('colorList', JSON.stringify(newColors))
  }

  
  const handleDelete = (id) => {
    const newColors = newColor.filter((color) => color.id !== id)
    localStorage.setItem('colorList', JSON.stringify(newColors))
    console.log(id)
    setNewColor(newColors)
  }
 
  const handleSubmit = (e) => {
    // e.preventDefault()
    addColor(colorValues);
    setSquareColor('');

  }
  return (
    <div className="App">
    <Header />
      <Square colorValues={colorValues}/>
      <Input 
      handleSubmit={handleSubmit}
      colorValues={colorValues}
      setSquareColor={setSquareColor}
      />
      <ColorList 
      handleDelete={handleDelete}
      colorValues={colorValues}
      newColor={newColor}
      setNewColor={setNewColor}
      setCurrentColor={setCurrentColor}
      setSquareColor={setSquareColor}
      />
        
    </div>
  );
}

export default App;