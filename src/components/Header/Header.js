import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
        <Navbar.Brand >TEACH-HOUSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Link to="/home">  <h className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h></Link> 
            <Nav.Link >Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



    );
};

export default Header;