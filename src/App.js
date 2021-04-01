 
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
import { Container, Jumbotron, TabContainer } from 'react-bootstrap';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Manage from './components/Manage/Manage';
import Checkout from './components/Checkout/Checkout ';
 
 

 

function App() {
   
  return (
    <Router>
    <div className="col-sm-12 col-md-12">
      <Header></Header>
    
      

      
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
       
        <Route path="/manage">
         <Manage></Manage>
        </Route>
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;