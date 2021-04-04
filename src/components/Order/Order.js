import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Order = () => {
    const [order,setOrder] =useState([]);
    const [ loggedInUser, setLoggedInUser]=useContext(UserContext)
    useEffect(() =>{
        fetch('http://localhost:5000/order?email='+ loggedInUser.email)
        .then(res =>res.json())
        .then(data =>setOrder(data));
    },[])
    
   
    
    return (
        <div style={{textAlign:'center'}}>
            <h1>Let's Book a {loggedInUser.name}</h1>
           <h3> You Have:{order.length} .</h3>
           {
               order.map(pd =><li>{pd.name}</li>)
           }
            
        </div>
    );
};

export default Order;