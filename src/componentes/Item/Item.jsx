import React from 'react'

const Item = ({id,Sahumerios,VelasAromaticas, AceitesEscenciales,precio,img}) => {
  return (
    <div>
        <img src="" alt="" />
        <h3>Nombre:{Sahumerios}</h3>
        <p>Precio:{500}</p>
        <p> ID:{id}</p>
        <button>Ver detalles</button>
    </div>
  )
}

export default Item