import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!"/>
      <ItemCount />
    </BrowserRouter>
  )
};

export default App