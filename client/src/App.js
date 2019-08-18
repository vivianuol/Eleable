import React from 'react';  
import { Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Addressbook from './pages/Addressbook';
import MyAccount from './pages/MyAccount';
import history from './history';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap'
import $ from 'jquery';
window.jQuery = window.$ = $;

function App() {
  return (
    <Router history={history}>
      <div id="bg">
        <Route exact path="/" component = {Landing} />
        <Route exact path="/login" component = {Landing} />
        <Route exact path="/signup" component = {Signup} />
        <Route exact path="/addressbook" component = {Addressbook} />
        <Route exact path="/myaccount" component = {MyAccount} />
        <Route exact path="/logout" component = {Landing} />
      </div>
    </Router>
  );
}

export default App;
