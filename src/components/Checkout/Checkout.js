import React from 'react';
import './Checkout.css';
import {Card, Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Checkout = (props) => {
    const {id,image,name,price} =props.product
    const history = useHistory()
    const handleProceed =() =>{
        history.push('/destination')
    }
    
    return (
        
        
       
   <div className="card  col-md-4 col-lg-4 col-sm-12 mt-2" >
   <img src={image} className="card-img-top " style={{height: '18rem'}} alt="..." />
   <div className="card-body">
     <h5 className="card-title">Name : {name}</h5>
     <h5 className="card-text">Price: ${price}</h5>
     
 <div className="d-grid gap-2">
   <button onClick={handleProceed}  className="btn btn-primary" type="button">Buy</button>
  
 </div>
   </div>
 </div>

    );
};

export default Checkout;