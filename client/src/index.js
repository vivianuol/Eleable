import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import {apiURL} from "../package.json";

 axios.defaults.baseURL = apiURL;
 
//  axios.interceptors.request.use(request => {
//     console.log(request);
//     // Edit request config
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

ReactDOM.render(<App />, document.getElementById('root'));


