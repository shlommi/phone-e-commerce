import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
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
        <div className="container">
          <Switch>
            <Route exact path="/" component={ProductList} /> />
            <Route path="/about" component={About} /> />
            <Route path="/contact" component={ContactUs} /> />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} /> />
            <Route component={NotFoundPage} />
          </Switch>
          <Modal />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
