import React from 'react';
import format from 'date-fns/format';
import { zhCN } from 'date-fns/locale';
import { Link } from 'react-router-dom';
// !文件名为index.module.scss 样式会加载不出
import notFound from '../../assets/psd-404-error.jpg';
import './not.css';


const ISOtime = "2019-09-06T03:00:00.000Z";
var dirtyDate = new Date(ISOtime);
var date = format(dirtyDate, 'yyyy-MM-dd');
var today = format(new Date(), "'Today is a' iiii", { locale: zhCN })

export default () => (
  <div className={"wrap"}> 
    <div style={{zIndex: "1000"}}>
        <h2>{today}</h2>
    </div>
    <Link to="/" className={"link"}>
    <img src={notFound} alt="notFound page" />
    </Link>
   
  </div>
);