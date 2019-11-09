import React from 'react';
import './App.css';
import Home from './home';
import Products from './products';
import Cart from './cart';
import Product from './items/product';
import IconCom from './iconComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/products">products</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/cart">Cart</Link>
      </li>
    </ul>
  </div>
  <IconCom />
</nav>

    <Route path='/' component = {Home} exact></Route>
    <Route path='/products' component = {Products} exact></Route>
    <Route path='/cart' component = {Cart}></Route>
    <Route path='/product' component = {Product}></Route>
    </div>
    </Router>
    
  );
}

export default App;
