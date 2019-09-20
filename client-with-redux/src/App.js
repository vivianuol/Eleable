import React from 'react';  
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from './components/containers/Login';
import Contactlist from './components/containers/Contactlist';
//import history from './history';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';
// import 'bootstrap/dist/css/bootstrap-reboot.min.css';
// import 'bootstrap';
// import $ from 'jquery';
// window.jQuery = window.$ = $;

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div id="bg">
        
        <Route exact path="/" component = {Login} />
        <Route exact path="/login" component = {Login} />
        {/* <Route exact path="/signup" component = {Signup} /> */}
         <Route exact path="/Contactlist" component = {Contactlist} />
         {/* <Route exact path="/myaccount" component = {MyAccount} /> */}
 
       </div>
    </Router>
  );
}

export default App;

