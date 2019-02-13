import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import NotFoundPage from "./components/NotFoundPage";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} /> />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} /> />
          <Route component={NotFoundPage} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
