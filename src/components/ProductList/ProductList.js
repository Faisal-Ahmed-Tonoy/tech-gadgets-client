import React from 'react';

const ProductList = (props) => {
   
    const {_id,imageURL,name,price} =props.product;
    const deleteProduct =(_id) =>{
        fetch('http://localhost:5000/delete/'+_id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    }
    
    return (
        <div>
            This is product <p>{name}</p>
            <button onClick={()=> deleteProduct(_id)}>Delete</button>
        </div>
    );
};

export default ProductList;