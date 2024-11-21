import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>        
        <Navbar/>            
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = "Nuestros Productos" />}/>            
            <Route exact path="/category/:idCategory" element={<ItemListContainer greeting = "Nuestros Productos" />}/>     
            <Route path="*" element={<ItemListContainer greeting = "Página no encontrada" />}/>   
            <Route exact path="/item/:idItem" element={<ItemDetailContainer/>}/>         
          </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
