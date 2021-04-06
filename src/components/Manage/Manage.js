import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
 
 

const Manage = () => { 
   
   
        const [products,setProducts]= useState([]);
        
        
            useEffect(() =>{ 
                fetch('https://young-basin-35516.herokuapp.com/products')
                .then(res =>res.json())
                .then(data =>setProducts(data))
         
                
            },[])


       
    return (
       <div>
            <Navbar  className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
          <Navbar.Brand >TECH-GADGETS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/home">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h6></Link> 
            <Link to="/order">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Order</h6></Link> 
        
          

            
           
            
            <NavDropdown title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/addProduct">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}>Add Product</h6></Link> </NavDropdown.Item>
            <NavDropdown.Item><Link to="/manage">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}> Manage Product</h6></Link></NavDropdown.Item>
            
          </NavDropdown>
            </Nav>
            <Nav>
           
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
 
{  
      
               
            
      products.map(product => <ProductList  key={product._id} product={product}></ProductList>)
  }
       </div>
        
    );
};

export default Manage;