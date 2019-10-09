import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Login from '../components/containers/Login';

const LoginRoute = ({ isLogin }) => {
  return isLogin ? <Redirect to="/" /> : <Login />;
};

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(LoginRoute);
