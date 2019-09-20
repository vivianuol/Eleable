import React from 'react';
import Login from '../components/Login';

var style =  {
    width: '20rem',
    height: '10rem'
}

class Landing extends React.Component {

    
    render () {    
        return (
            <div>
                <img style={style} src="img/eleable_logo.svg" alt= "eleable-logo" />
                <Login />
            </div>
        );
    }
}

export default Landing;