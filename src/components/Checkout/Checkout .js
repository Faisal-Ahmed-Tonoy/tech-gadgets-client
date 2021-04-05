import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
 
 
const Checkout  = () => {
 
    
    const { _id }=  useParams();
    const [ loggedInUser, setLoggedInUser]=useContext(UserContext)
    
    const [product,setProduct]=useState({});
    
   
    const {name,price} =product;

    
    
    

    useEffect(() =>{
fetch('http://localhost:5000/product/'+_id)
.then(res =>res.json())
.then(data =>setProduct(data));

 
    },[_id])
    console.log(product);

    const handleOrder =() =>{
      const newOrder ={...loggedInUser,name,price, orderTime:new Date().toDateString('dd,mm,yyyy,g:i A TT','HH:mm:ss.')}
      
   fetch('http://localhost:5000/placeOrder',{
     method:'POST',
     headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(newOrder)
   })
  .then(res =>res.json())
.then(data =>{
 
 
 
}); (window.confirm('Item Added'))
 }
   
    return (
      <div>
          
      <Navbar className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
      <Navbar.Brand >TECH-GADGETS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/home">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h6></Link> 
        <NavDropdown title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/addProduct">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}>Add Product</h6></Link> </NavDropdown.Item>
            <NavDropdown.Item><Link to="/manage">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}> Manage Product</h6></Link></NavDropdown.Item>
            
          </NavDropdown>

          <Link to="/order">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Order</h6></Link> 
   
        <Link to= {"/product/"+_id}>  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Checkout    </h6></Link>
     

       
        </Nav>
        <Nav>
      
        
        
        
       
          
       
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
            <td>1</td>
            <td>${price}</td>
            
          </tr>
        
          <tr>
            <td  >Total</td>
            <td >1</td>
            <td >${price}</td>
           
          </tr>
        </tbody>
      </table>
       <button class="btn btn-primary m-2" onClick={handleOrder}> Checkout </button>
       
      
      </div>
        
    );
};

export default Checkout ;