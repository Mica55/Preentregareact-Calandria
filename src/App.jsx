import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos"}/>
    
    </div>


  )
}

export default App