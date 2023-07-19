import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
  return (
    <div  className="card mt-2" style={{width:'18rem'}} >
        <img src= {img} alt="" className="card-img-top" width={'100%'} height={300}/>
        <h3 className="card-text">Nombre:{nombre}</h3>
        <p className="card-text">Precio:{precio}</p>
        <p className="card-text"> ID:{id}</p>
        <Link to={`/Item/${id}`}className="btn btn-primary">Ver detalles</Link>
    </div>
    

  )
}

export default Item


