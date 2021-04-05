import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Order.css';

const Order = () => {
    const [order,setOrder] =useState([]);
    const [ loggedInUser, setLoggedInUser]=useContext(UserContext)
    useEffect(() =>{
        fetch('http://localhost:5000/order?email='+ loggedInUser.email)
        .then(res =>res.json())
        .then(data =>setOrder(data));
    },[])
    
    const totalPrice = order.reduce(
        (sum, amount) => sum + parseInt(amount.price),
        0
      );
    
   
    
    return ( 
        
        
        <div style={{textAlign:'center'}}>
              <Navbar className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
      <Navbar.Brand >TECH-GADGETS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/home">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h6></Link> 

      
     
       
        <Link to="/order">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Order</h6></Link> 

           
        </Nav>
        <Nav>
      
        <NavDropdown title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/addProduct">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}>Add Product</h6></Link> </NavDropdown.Item>
            <NavDropdown.Item><Link to="/manage">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}> Manage Product</h6></Link></NavDropdown.Item>
            
          </NavDropdown>
        
        
       
          
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
           
            
            
            <h1  style={{color:"white",backgroundColor:"#0D6EFD",marginBottom:"4px",padding:"8px"}}>Name: {loggedInUser.name}</h1>
           <h3  style={{color:"white",backgroundColor:"#0D6EFD",marginBottom:"4px",padding:"8px"}}> Number Of Product Added To Your List Is: {order.length}  </h3>
        {
               order.map(pd => <h5 style={{color:"white",backgroundColor:"#212529",marginBottom:"4px",padding:"8px"}}> Product Name: {pd.name} | Price: {pd.price} |  Order Placed :{pd.orderTime} </h5> )
           }
          
         <h2  style={{color:"white",backgroundColor:"#0D6EFD",marginBottom:"4px",padding:"8px"}}>Total Amount: $ {totalPrice}</h2>  
            
        </div>
    );
};

export default Order;