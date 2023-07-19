

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="card mt-2" style={{ width: '18rem' }} >
      <img src={img} alt="" className="card-img-top" />
      <h3 className="card-text">Nombre:{nombre}</h3>
      <p className="card-text">Precio:{precio}</p>
      <p className="card-text"> ID:{id}</p>
      <button className="btn btn-primary">Ver detalles</button>
    </div>


  )
}

export default Item