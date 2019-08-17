import React from 'react';
import "./Login.css";
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password: '',
            notice: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log("clicked");
        var userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log({"userData": userData});
      
        axios.post("/api/login", {
            email: this.state.email,
            password: this.state.password
          }, { withCredentials: true}).then((response)=>{
              console.log("response: " + JSON.stringify(response));
            this.setState({notice: "success!"});
            setTimeout(() =>window.location.replace('addressbook'), 3000);
          }).catch((err) => {
            this.setState({notice: "Either username or password is incorrect!"});
            console.log(err);
          });

    }


        
    

    render() {
        return (
            <div>
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input type="text" name="username" id="username" className="form-control" value={this.state.email} onChange={e => { this.setState({ email: e.target.value })}} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={e => { this.setState({ password: e.target.value }); console.log(e.target.value)}} />
                                           
                                        </div>
                                        <div className="form-group">
                                        <p style={this.state.notice === "success!"? {color:'green'}:{color:'red'}}>{this.state.notice}</p>
                                            <label htmlFor="remember-me" className="text-info">
                                                <span>Remember me </span>
                                                <span>
                                                    <input id="remember-me"
                                                    name="remember-me" type="checkbox" />
                                                </span>
                                            </label><br />
                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit" onClick={this.handleSubmit}/>
                                        </div>
                                        <div id="register-link" className="text-right">
                                            <a href="/signup" className="text-info">Register here</a>
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