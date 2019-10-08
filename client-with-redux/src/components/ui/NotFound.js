import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/psd-404-error.jpg';
import './not.css';


export default () => (
  <div className={"wrap"}> 
    <Link to="/" className={"link"}>
    <img src={notFound} alt="notFound page" />
    </Link>
   
  </div>
);