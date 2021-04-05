import React from 'react';

const ProductList = (props) => {
   
    const {_id,imageURL,name,price,brand} =props.product;
    const deleteProduct =(_id) =>{
        fetch('http://localhost:5000/delete/'+_id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        (window.confirm('Item Has Deleted. Reload To See Update.'))
      });

    }
    
    return (
        <div style={{textAlign:"center"}}>
          <h5 style={{color:"white",backgroundColor:"#212529",marginTop:"10px",padding:"8px"}}> Product Name: {name} | Price: {price} | Brand: {brand}  <button className="btn btn-primary" onClick={()=> deleteProduct(_id)}>Delete</button>   </h5>
            
           
        </div>
    );
};

export default ProductList;