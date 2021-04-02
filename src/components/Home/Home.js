import React, { useEffect, useState } from 'react';
import './Home.css';
 
 
import Products from '../Products/Products';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products,setProducts]= useState([]);
    useEffect(() =>{ 
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProducts(data))
        
    },[])
    return (
       
           
           <div className="row " >
             <Navbar className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
          <Navbar.Brand >TECH-GADGETS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/home">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h6></Link> 

            <Link to="/manage">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Manage Product</h6></Link> 

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
               
               
           {
            products.map(product => <Products  key={product.key} product={product}></Products>)
        }
        </div>
        
    );
};

export default Home;