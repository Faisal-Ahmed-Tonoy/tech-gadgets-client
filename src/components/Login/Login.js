import React, { useContext } from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

import { useHistory, useLocation } from 'react-router-dom';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation(); 
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="row " >
        <Navbar className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
          <Navbar.Brand >TECH-GADGETS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/home">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h6></Link> 
            <Link to="/order">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Order</h6></Link> 
        
            <Link to="/login">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Login</h6></Link> 

        
            <NavDropdown title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/addProduct">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}>Add Product</h6></Link> </NavDropdown.Item>
            <NavDropdown.Item><Link to="/manage">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}> Manage Product</h6></Link></NavDropdown.Item>
            
          </NavDropdown>
            
             
            </Nav>
            
            <Nav>
           
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          
   
   <div class="d-grid gap-2 col-3 mx-auto mt-5 card " >
   <div  >
        
        <div className="card-body">
          <h2 className="card-text " style={{color:'#198754'}}>Login </h2> 
          <h6 className="card-text " style={{color:'#198754'}} > Username or Email </h6>
          <hr></hr>
          <h6 className="card-text" style={{color:'#198754'}} > Password </h6>
          <hr></hr>
        </div>
      </div>      
   
  <button  class="btn btn-success " type="button"   >Login</button>
<h5 style={{color:'#0D6EFD'}}>You can aslo login using your gmail</h5>
  <button  class="btn btn-primary mb-2" type="button"  onClick={handleGoogleSignIn} >Log in With Gmail</button>
</div>

 
    
            </div>
    );
};

export default Login;