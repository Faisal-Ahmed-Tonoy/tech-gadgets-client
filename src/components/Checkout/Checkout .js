import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Checkout  = () => {
    
    const { key }=  useParams();
    const [product,setProduct]=useState([]);
    const {name,quantity,price} =product;
    

    useEffect(() =>{
fetch('http://localhost:5000/product/'+key)
.then(res =>res.json())
.then(data =>setProduct(data));
 
    },[key])
    console.log(product);
    return (
        <div>
         <h1> Length:  {product.length}</h1> 
         <h5 className="card-title">Name : {name}</h5>
         <h5 className="card-title">Quantity : {quantity}</h5>
         <h5 className="card-title">Price : {price}</h5>

        
        </div>
    );
};

export default Checkout ;