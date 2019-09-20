import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import {apiURL} from "../package.json";

import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

 axios.defaults.baseURL = apiURL;

 const store = applyMiddleware(thunk,logger)(createStore)(rootReducer);
 
//  axios.interceptors.request.use(request => {
//     console.log(request);
//     // Edit request config
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>

, document.getElementById('root'));


