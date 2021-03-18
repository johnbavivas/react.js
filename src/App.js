import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Counter } from './components/Counter';
import {useEffect, useState} from "react";


function App() {

const [items, setItems] = useState([])

  useEffect (() => {
    new Promise((vaBien,vaMal) => {
      setTimeout(() => {

      },2000);
      vaBien(['televicion','laptop','movil'])
    }).them(resultado => setItems(resultado))
  });


   const onAdd = (e,q) => {
     alert(`has agregado ${q} elementos al carrito.`)
   }
  return (
    <>
    <NavBar />
    <ItemListContainer items={items} />
    <Counter init={1} stock={10} onAdd={onAdd}/>
    </>

  );
}

export default App;
