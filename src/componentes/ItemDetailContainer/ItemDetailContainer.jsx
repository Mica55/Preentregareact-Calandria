import { useState,useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [prodcuto, setProducto]= useState({});
  const {idItem} = useParams();
  useEffect(() => {
      getUnProducto(idItem)
      .then(res => setProducto(res))
  }, [idItem])
return (
  <div>
      <ItemDetail {...prodcuto}/>
  </div>
)
}

export default ItemDetailContainer