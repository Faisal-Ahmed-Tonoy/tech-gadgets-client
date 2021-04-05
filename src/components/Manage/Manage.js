import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';
 
 

const Manage = () => { 
   
   
        const [products,setProducts]= useState([]);
        
            useEffect(() =>{ 
                fetch('http://localhost:5000/products')
                .then(res =>res.json())
                .then(data =>setProducts(data))
         
                
            },[])


       
    return (
       <div>
 
{  
      
               
            
      products.map(product => <ProductList  key={product._id} product={product}></ProductList>)
  }
       </div>
        
    );
};

export default Manage;