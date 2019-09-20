import React from 'react';
import "./Signup.css";
import axios from 'axios';


function Signup ({username, password, notice}) {

    
        return (
            <div>
                <div id="signup">
                    <div className="container">
                        <div id="signup-row" className="row justify-content-center align-items-center">
                            <div id="signup-column" className="col-md-6">
                                <div id="signup-box" className="col-md-12">
                                    <form id="signup-form" className="form" action="" method="post">
                                        <h3 className="text-center text-info">Sign Up</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input type="email" name="username" id="username" className="form-control" value={this.state.username} onChange={e => { this.setState({ username: e.target.value }); console.log("username: " + this.state.username) }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={e => { this.setState({ password: e.target.value }); console.log("password: " + this.state.password) }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Confirm Password:</label><br />
                                            <input type="password" name="confirm-password" id="confirm-password" className="form-control" value={this.state.confirm_password} onChange={e => { this.setState({ confirm_password: e.target.value }) }} />
                                            <p style={this.state.notice === "success!" ? { color: 'green' } : { color: 'red' }}>{this.state.notice}</p>
                                        </div>
                                        <div className="form-group">
                                            <button id="signup-button" className="btn btn-info btn-md" onClick={this.handleSubmit}>submit</button>
                                        </div>
                                        <div id="account-link" className="text-right">
                                            Have an account?
                                            <a href="/" className="text-info">Login here</a>
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


export default Signup;