import './styles/App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  const texto = "Proximamente Productos!!";
  return ( 
    <div className="contenedor">
      <Navbar />
      <ItemListContainer greeting = {texto}/>
    </div> 
  )
}

export default App;
