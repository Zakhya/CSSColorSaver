import React from 'react'

const Square = ({ colorValues }) => {
  return (
    <div >
    <section className="colorBox"
    style={{ background: colorValues }}
    >
    <p>{colorValues ? colorValues : "Empty Value"}</p>
    </section>
    </div>
  )
}
Square.defaultProps = {
  colorValues: "Empty color value"
}

export default Square