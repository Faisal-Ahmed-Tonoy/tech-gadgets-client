import axios from 'axios';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


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
     const url = 'https://young-basin-35516.herokuapp.com/addProducts';
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
        <div style={{textAlign:"center"}}>
           <Navbar className="header " collapseOnSelect expand="md" bg='dark'  variant="dark">
      <Navbar.Brand >TECH-GADGETS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/home">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Home</h6></Link> 
 
        
        <Link to="/order">  <h6 className="nav-link" style={{color:'white', textDecoration: 'none' }}>Order</h6></Link> 

        <NavDropdown title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/addProduct">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}>Add Product</h6></Link> </NavDropdown.Item>
            <NavDropdown.Item><Link to="/manage">  <h6 className="nav-link" style={{color:'grey', textDecoration: 'none' }}> Manage Product</h6></Link></NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
        <Nav>
      
        
        
        
       
          
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
            <h1 style={{margin:"20px"}}> Add Product</h1>
        <form   onSubmit={handleSubmit(onSubmit)}>
        <label  htmlFor="name" className="p-2" >
             Product Name:
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