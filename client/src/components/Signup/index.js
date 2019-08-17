import React from 'react';
import "./Signup.css";
import axios from 'axios';


class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            confirm_password: "",
            notice: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    alphanumeric(inputtxt) {
        //contain at least one letter, one number and one special charactor.
        var letterNumber = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=()^?&])[A-Za-z\d$@$!%* #+=()^?&]{3,}$/;

        if (inputtxt.match(letterNumber)) {
            return true;
        }
        else {
            this.setState({ notice: "Your password should contain both letters and numbers, and at least one special charactor." });
            return false;
        }
    }

    checkConfirmMatch(first, second) {
        if (first === second) {
            return true;
        }
        else {
            this.setState({ notice: "Passwords not match!" });
            return false;
        }
    }

    checkPasswordLength(pw) {
        if (pw.length >= 6) {
            return true;
        }
        else {
            this.setState({ notice: "Password should be at least 6 charactors!" });
            return false;
        }
    }


    handleSubmit(e) {
        //this preventDefault() aims to control the click event doing what, 
        //if what to submit is a form, it will automatically send <form> according action attribute
        e.preventDefault();
        console.log("clicked");


        if (this.alphanumeric(this.state.password) &&
            this.checkPasswordLength(this.state.password) &&
            this.checkConfirmMatch(this.state.password, this.state.confirm_password)) {

            axios.post('/api/signup', {
                email: this.state.username,
                password: this.state.password
            })
                .then((response) => {
                    console.log(response);

                    this.clearState();
                    if (response.data !== "") {
                        this.setState({ notice: response.data })
                    } else {
                        this.setState({ notice: "success!" })
                        setTimeout(() => { console.log(window.location.replace("/login")) }, 2000);
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }

    clearState() {
        this.setState({
            username: "",
            password: "",
            confirm_password: "",
            notice: ""
        })
    }

    render() {
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
}

export default Signup;