import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setIMageURL] = useState(null);
    const onSubmit = data => {
     const eventData ={
       name:data.name,
       price:data.price,
       brand:data.brand,
       imageURL:imageURL
     };
     const url = `http://localhost:5000/addProducts`;
     console.log(eventData)
     fetch(url,{
       method: 'POST',
       headers:{ 
        'content-type': 'application/json'
       },
       body:JSON.stringify(eventData)
     })
     .then(res => console.log('server site response'))
    };
    const  handleImageUpload = event =>{ 
      console.log(event.target.files[0])
        const imageData =new FormData();
        imageData.set('key','f9ddb3dab982c8e822f3464eac3237d7');
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });  

    }
    return (
        <div>
            <h1>Add Your awesome Event here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="p-2" >
             Product Name
          </label>
      <input name="name" defaultValue="Enter Name" ref={register} />
      
      <br/>
      <label htmlFor="price" className="p-2" >
           Add  Price
          </label>
      <input name="price" defaultValue="Enter Price" ref={register} />
      
      <br/>
      <label htmlFor="brand" className="p-2" >
           Brand Name
          </label>
      <input name="brand" defaultValue="Enter Brand" ref={register} />
      
      <br/>
       
      <input name="exampleRequired" type="file"  
      onChange ={handleImageUpload} />
      
       
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;