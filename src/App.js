import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Counter } from './components/Counter';


function App() {
   const onAdd = (e,q) => {
     alert(`has agregado ${q} elementos al carrito.`)
   } 
  return (
    <>
    <NavBar />
    <ItemListContainer />
    <Counter init={1} stock={10} onAdd={onAdd}/>
    </>

  );
}

export default App;
