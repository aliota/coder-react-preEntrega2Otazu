import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>        
      <Navbar/>     
      <ItemListContainer greeting="Bienvenidos a nuestra tienda virtual, en breve estaremos inaugurando..."/>      
    </>
  )
}

export default App
