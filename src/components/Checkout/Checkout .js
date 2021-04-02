import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Checkout  = () => {
    
    const { _id }=  useParams();
    
    const [product,setProduct]=useState({});
   
    const {name,quantity,price} =product;
    
    
    

    useEffect(() =>{
fetch('http://localhost:5000/product/'+_id)
.then(res =>res.json())
.then(data =>setProduct(data));
 
    },[_id])
    console.log(product);
   
    return (
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
        
    );
};

export default Checkout ;