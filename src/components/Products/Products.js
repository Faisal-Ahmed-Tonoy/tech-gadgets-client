import React from 'react';
 
import {Card, Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout ';

const Products = (props) => {
    const {_id,image,name,price} =props.product
    const history = useHistory()
    const handleProceed =() =>{
        history.push('/product/'+_id)
    }
    
    return (
        
        
       
   <div className="  col-md-4" >
  <div>
  <img src={image} className="card-img-top " style={{height: '18rem'}} alt="..." />
   <div className="card-body">
     <h5 className="card-title">Name : {name}</h5>
     <h5 className="card-text">Price: ${price}</h5>
     
     
 <div className="d-grid gap-2">
 <button  onClick={handleProceed}  className="btn btn-primary" type="button">        <Link to= {"/product/"+_id}>  <h6  style={{color:'white', textDecoration: 'none' }}>Buy Now</h6></Link>  </button>
     
   
 
  
 </div>
   </div>
  </div>

 </div>

    );
};

export default Products;