import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button, Container, Row, Col,Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


export default function Header() {
  const history = useHistory();
  const dispatchMethod = useDispatch();
  const logout = () => {
    window.localStorage.clear();
    history.push("/Login");
    // dispatchMethod(logout());
  };
    return (
        <>
              
            
            
              
            <Navbar collapseOnSelect expand="lg" >
            <Container className="navc">
  <Navbar.Brand href="/Brand"><Image src="https://image.shutterstock.com/image-vector/shopping-cart-logo-electronic-commerce-260nw-1290022138.jpg" className="navimg" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

  
    <Nav className="ml-auto">
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" className="btns">Search</Button>
        
    <Nav.Link as={Link} to='/home' id="font1">Home</Nav.Link>
    <Nav.Link as={Link} to='/Profile'  id="font1">Profile</Nav.Link>
    
    
      
      <NavDropdown title="Setting" id="collasible-nav-dropdown"  id="font1">
        <NavDropdown.Item as={Link} to='/Registration'>Registration</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Login'>Login</NavDropdown.Item>
        
        
        <button onClick={logout} >Logout</button>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    
    </Nav>
  </Navbar.Collapse>
  <Navbar.Text  id="font2"> 
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    
    </Container>
</Navbar>








        </>
    )
}
