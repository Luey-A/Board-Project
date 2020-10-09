/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Completed from "./components/Completed";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      {/* <Nav className="justify-content-center" activeKey="/home"/> */}
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/completed" component={Completed} />
    </Router>
  );
}

export default App;
