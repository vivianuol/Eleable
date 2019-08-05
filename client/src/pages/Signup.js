import React from 'react';
import Signup from '../components/Signup';

var style =  {
    width: '20rem',
    height: '10rem'
}

class SignUpPage extends React.Component {

    
    render () {    
        return (
            <div>
                <img style={style} src="img/eleable_logo.svg" alt= "eleable-logo" />
                <Signup />
            </div>
        );
    }
}

export default SignUpPage;