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
export const UserContext = createContext();
 

 
 
 

 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
   
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
    <Router>
     
    
      

      
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/checkout/:_id">
          <Checkout></Checkout>
        </Route>
       
        <Route path="/login">
     <Login></Login>
        </Route>
        <Route path="/manage">
         <Manage></Manage>
        </Route>
       
      </Switch>
 
  </Router>
  </UserContext.Provider>
  );
}

export default App;