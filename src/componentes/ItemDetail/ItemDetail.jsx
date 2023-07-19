
const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur deleniti voluptas pariatur itaque rem repellendus fuga neque laudantium, necessitatibus odit nam. Optio quasi architecto quaerat sit quia quo culpa distinctio.</p>
        <img src={img} alt={nombre}/>



    </div>
  )
}

export default ItemDetail