import React from 'react';
import "./Signup.css";

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        confirm_password: "",
        preCheckNotice: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirm_password } = this.state;
        const { onSignup } = this.props;
        if (password !== confirm_password) {
            this.setState({ preCheckNotice: [...this.state.preCheckNotice, "Passwords do not match! Please confirm your password again!"] })
        } else {
            //put API call
            let register={
                username: this.state.username,
                password: this.state.password
            }
            onSignup(register);
            console.log("Signup submitted.")
        }
    }
    render() {
        const { notice } = this.props;
        return (
            <div className="body">
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
                                            
                                        </div>
                                        <div class="form-group">
                                            <p className="message">{this.state.preCheckNotice.toString()}</p>
                                        </div>
                                        <div className="form-group">
                                            <button id="signup-button" className="btn btn-info btn-md" onClick={this.handleSubmit}>submit</button>
                                            
                                        </div>
                                        <p style={notice === "You've successfully registered to Eleable!" ? { color: 'green' } : { color: 'red' }}>{notice}</p>
                                        <div id="account-link" className="text-right">
                                            Have an account?
                                            <a href="/">Login here</a>
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