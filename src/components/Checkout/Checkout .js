import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout  = () => {
    
    const { _id }=  useParams();
    
    const [checkout,setCheckout]=useState({});
   
    const {name,quantity,price} =checkout;
    
    
    

    useEffect(() =>{
fetch('http://localhost:5000/checkout/'+_id)
.then(res =>res.json())
.then(data =>setCheckout(data));
 
    },[_id])
    console.log(checkout);
   
    return (
      <div>
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
        <Link to= {"/product/"+_id}>  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Checkout </h6></Link>
       
          
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
           
      
        <table class="table table-sm table-dark checkout-table" style={{marginTop:'200px'}} >
        <thead>
          <tr>
           
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  >{name}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            
          </tr>
        
          <tr>
            <td  >Total</td>
            <td >{quantity}</td>
            <td >${price}</td>
           
          </tr>
        </tbody>
      </table>
      </div>
        
    );
};

export default Checkout ;