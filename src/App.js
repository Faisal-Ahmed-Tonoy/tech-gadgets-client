import React, { createContext, useState } from 'react'; 
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
import { Container, Jumbotron, TabContainer } from 'react-bootstrap';
import Home from './components/Home/Home';
 
import Manage from './components/Manage/Manage';
import Checkout from './components/Checkout/Checkout ';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import AddProduct from './components/AddProduct/AddProduct';
 

export const UserContext = createContext();
 

 
 
 

 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
   
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
    <Router>
     
    
      

      
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/product/:_id">
          <Checkout></Checkout>
        </PrivateRoute>
       
        <Route path="/login">
     <Login></Login>
        </Route>
        <PrivateRoute path="/manage">
         <Manage></Manage>
        </PrivateRoute>
        <PrivateRoute path="/order">
         <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/order">
        
        </PrivateRoute>
         <PrivateRoute path="/addProduct">
           <AddProduct></AddProduct>
         </PrivateRoute>
            
      </Switch>
 
  </Router>
  </UserContext.Provider>
  );
}

export default App;