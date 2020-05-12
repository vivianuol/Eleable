import React from 'react';
import "./Login.css";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handlePasswordChange = (event)=> {
        this.setState({
            password: event.target.value
        });
    }

    // shouldComponentRender() {
    //     const { pending } = this.props;
    //     if (pending === false) return false;
    //     return true;
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onLogin } = this.props;
        console.log("clicked");
        console.log(this.state)
        
        onLogin(this.state);
        console.log("login submited.")

    }

    render() {
        const { notice } = this.props;


        return (
            <div className="body">
                <div className="brand">
                    <h2>ELEABLE</h2>
                </div>
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input type="text" name="username" id="username" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
                                        </div>          
                                        <div className="form-group">
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit" onClick={this.handleSubmit} />
                                        </div>
                                        <p style={notice === "Login success!" ? { color: 'green' } : { color: 'red' }}>{notice}</p>
                                        <div id="register-link" className="text-right">   
                                        Do not have an account?
                                            <a href="/signup">Register here</a>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;