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
          
   
   <div class="d-grid gap-2 col-3 mx-auto mt-5 card " style={{border: '2x solid red'}}>
   <div  >
        
        <div className="card-body">
          <h2 className="card-text" style={{border: '2x solid red',color:'#0D6EFD'}}>Please Click The </h2> 
          <h2 className="card-text" style={{border: '2x solid red',color:'#0D6EFD'}} > Button Below </h2>
          <h2 className="card-text" style={{border: '2x solid red',color:'#0D6EFD'}} > Login With Google </h2>
        </div>
      </div>      
   
  <button  class="btn btn-primary mb-4" type="button"  onClick={handleGoogleSignIn} >Log in With Gmail</button>
</div>
 
    
            </div>
    );
};

export default Login;