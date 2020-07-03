import React from 'react';
//import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import './App.css';
import { DISHES } from './share/dishes';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;




/*
<Navbar dark color="primary">
       <div className="container">
        <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
       </div>
      </Navbar>
<Menu dishes = { DISHES } /> 

*/