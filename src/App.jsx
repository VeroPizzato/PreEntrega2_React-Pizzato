import './styles/App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer';

function App() {
  const texto = "Proximamente Productos!!";
  return ( 
    <div className="contenedor">
      <Header />     
      <ItemListContainer greeting = {texto}/>     
    </div> 
  )
}

export default App;
