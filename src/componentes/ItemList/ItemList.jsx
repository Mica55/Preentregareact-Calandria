import Item from "../Item/Item"

export const ItemList = ({productos}) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
        {productos.map(prod => <Item key={prod.id}{...prod }/>)}
    </div>
  )
}
