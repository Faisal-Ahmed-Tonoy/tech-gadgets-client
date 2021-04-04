import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const  handleImageUpload = event =>{ 
      console.log(event.target.files[0])
        const imageData =new FormData();
        imageData.set('key','f9ddb3dab982c8e822f3464eac3237d7');
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });  

    }
    return (
        <div>
            <h1>Add Your awesome Event here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
       
      <input name="example" defaultValue="test" ref={register} />
      <br/>
       
      <input name="exampleRequired" type="file"  
      onChange ={handleImageUpload} />
      
       
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;