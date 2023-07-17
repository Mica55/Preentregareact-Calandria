import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos"}/>
      
      <Routes> </Routes>
      <Route> </Route>
      
      
      </BrowserRouter>
     

    
    </div>


  )
}

export default App