 
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
 
 

 

function App() {
   
  return (
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
       
        <Route path="/manage">
         <Manage></Manage>
        </Route>
       
      </Switch>
 
  </Router>
  );
}

export default App;