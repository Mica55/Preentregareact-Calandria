import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes> 
      <Route path="/" element={<ItemListContainer/> } />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/> } />
      <Route path="/Item/idItem" element={<ItemDetailContainer/>}/>
      <Route path="*" element= {<h2>Error 404</h2>}/> 
      </Routes>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemDetailContainer/>

      
      </BrowserRouter>
     
    
    </div>


  )
}

export default App