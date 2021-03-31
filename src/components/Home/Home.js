import React, { useEffect, useState } from 'react';
import './Home.css';
import productData from '../../data/data.json';
import Checkout from '../Checkout/Checkout';

const Home = () => {
    const [products,setProducts]= useState([]);
    useEffect(() =>{ 
        setProducts(productData);
        console.log(productData);
    })
    return (
        
           
           <div className="row home" >
           {
            products.map(product => <Checkout product={product}></Checkout>)
        }
        </div>
    );
};

export default Home;