import React from 'react';
//import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import './App.css';
import { DISHES } from './share/dishes';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();
function App() {
  
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div >
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;



