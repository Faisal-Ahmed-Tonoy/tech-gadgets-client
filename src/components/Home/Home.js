import React, { useEffect, useState } from 'react';
import './Home.css';
 
 
import Products from '../Products/Products';

const Home = () => {
    const [products,setProducts]= useState([]);
    useEffect(() =>{ 
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProducts(data))
        
    },[])
    return (
        
           
           <div className="row " >
           {
            products.map(product => <Products  key={product.key} product={product}></Products>)
        }
        </div>
    );
};

export default Home;