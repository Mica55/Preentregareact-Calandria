import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategorias } from "../../asyncmock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategorias : getProductos;
    funcion(idCategoria)
      .then(res => setProductos(res))

  }, [idCategoria])
  return (
    <div className="container">
      <div className="row">
        <h2>Productos</h2>
        <ItemList productos={productos}/>
      </div>



    </div>




  )
}

export default ItemListContainer