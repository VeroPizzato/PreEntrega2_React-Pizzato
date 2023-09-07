import './styles/App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";

function App() {
  const texto = "Proximamente Productos!!";
  return ( 
    <div className="contenedor">
      <Navbar />
      <ItemListContainer greeting = {texto}/>   
      <ItemCount /> 
    </div> 
  )
}

export default App;
