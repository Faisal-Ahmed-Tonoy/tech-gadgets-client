 
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
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;