import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes> 
      <Route path="/" element={<ItemListContainer/> } />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/> } />
      <Route path="/Item/:idItem" element={<ItemDetailContainer/>}/> 
      <Route path="/cart" element={<h2>Carrito de Compras</h2>}/>
      <Route path="*" element= {<h2>Error 404</h2>}/> 
      </Routes>
    

      
      </BrowserRouter>
     
    
    </div>


  )
}

export default App