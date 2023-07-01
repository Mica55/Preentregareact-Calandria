import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos"}ItemListContainer/>

    </div>


  )
}

export default App