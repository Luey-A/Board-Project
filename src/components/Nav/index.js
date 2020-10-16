import React from "react";
// import "../App.css";
// import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


const NavBar1 = () => {
  return (
    // <div className="navbar">
    //   <img src="../boardlogo.jpg"></img>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/completed">Completed</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
 <Navbar bg="light" expand="lg">
  <Navbar.Brand src="C:\Users\ouol\Desktop\ReCoded\Board project\Board-Project\src\components\Nav\logo.png"></Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  <Navbar.Collapse id="basic-navbar-nav">
   <img src="/image/logo.jpg" alt="logo" width= "100px" ></img> 
   
   <Nav  className="mr-auto">
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/completed" >Completed</Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Completed</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar> 
 );
};
export default NavBar1;

