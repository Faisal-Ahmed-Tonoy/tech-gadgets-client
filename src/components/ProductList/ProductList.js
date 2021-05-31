import React, { useState } from 'react';

 
const ProductList = (props) => {
   const deleteProduct=props.deleteProduct;
    const {_id,imageURL,name,price,brand} =props.product;
    
    
   
    
    return (
        <div style={{textAlign:"center"}}>
        
          <h5 className="hidden" style={{color:"white",backgroundColor:"#212529",marginTop:"10px",padding:"8px"}}> Product Name: {name} | Price: {price} | Brand: {brand}  
          <button className="btn btn-primary" onClick={()=> deleteProduct(_id) }>Delete</button>    </h5>
         
           
        </div>
    );
};

export default ProductList;