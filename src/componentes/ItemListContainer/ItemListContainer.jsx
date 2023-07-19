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
    <>
      <h2>{props.greeting}</h2>
      <ItemList productos={productos} />


    </>

  )
}

export default ItemListContainer