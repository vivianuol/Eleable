import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Login from '../components/containers/Login';

import Home from '../pages/home';

const ContentRoute =  ({ isLogin }) => {
  return isLogin ? 
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  : 
    <Login />
  ;
};
 
const mapStateToProps = state => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(ContentRoute);