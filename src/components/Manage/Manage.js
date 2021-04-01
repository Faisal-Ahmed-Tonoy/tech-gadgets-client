import React from 'react';
import productData from '../../data/data.json';

const Manage = () => {
    console.log(productData);
    const handleAddProduct=() =>{
       fetch('http://localhost:5000/addProduct',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData) 
         
       })

    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Manage;