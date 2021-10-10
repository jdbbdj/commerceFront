import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';


const App = () => {
  return( 
  <Router>
    <Switch>
      <Route path="/pay">
        <Pay/>
      </Route>
      <Route path="/success">
        <Success/>
      </Route>
    </Switch>
  </Router>);
};
//<Home/>
export default App;