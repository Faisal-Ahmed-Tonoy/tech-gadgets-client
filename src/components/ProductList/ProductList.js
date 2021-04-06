import React, { useState } from 'react';
import Manage from '../Manage/Manage';
 
const ProductList = (props) => {
   
    const {_id,imageURL,name,price,brand} =props.product;
    
    
    const deleteProduct =(_id) =>{
      
        fetch('https://young-basin-35516.herokuapp.com/delete/'+_id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
       
         (window.confirm('Item Has Deleted, Reload To See Update Or Go To Home Page.'))
      });

    }
    
    return (
        <div style={{textAlign:"center"}}>
        
          <h5 className="hidden" style={{color:"white",backgroundColor:"#212529",marginTop:"10px",padding:"8px"}}> Product Name: {name} | Price: {price} | Brand: {brand}  <button className="btn btn-primary" onClick={()=> deleteProduct(_id) }>Delete</button>    </h5>
         
           
        </div>
    );
};

export default ProductList;