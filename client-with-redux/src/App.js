import React from 'react';  
import { Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from "history";
import {history} from "./store";
import Login from './components/containers/Login';
import Signup from './components/containers/Signup';
import NotFound from './components/ui/NotFound';
import PrivateRoute from './route/PrivateRoute';
//should always remember to export module(which means should not empty), before import module; otherwise, it will report the error message in browser like: You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. 

// import {history} from './store/store';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';
// import 'bootstrap/dist/css/bootstrap-reboot.min.css';
// import 'bootstrap';
// import $ from 'jquery';
// window.jQuery = window.$ = $;

// const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        {/* <PrivateRoute exact path="/" component = {Login} /> */}
        <Route exact path="/login" component = {Login} />
        <Route exact path="/signup" component = {Signup} />
         {/* <Route exact path="/myaccount" component = {MyAccount} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

