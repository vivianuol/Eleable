import React from "react";
import "./style.css"
import axios from 'axios';

export default class Password extends React.Component {
    constructor() {
        super();
        this.state = {
            password: "",
            confirmPW: "",
            notice: ""
        }

        this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
    };

    handleUpdatePassword(event) {
        event.preventDefault();
        console.log("handle password change.")
        let pw = this.state.password;
        let cpw = this.state.confirmPW;
        console.log("pw: " + pw);
        console.log("cpw: " + cpw);

        if (pw !== cpw) {
            this.setState({ notice: "Passwords are not identical. Confirm your password again." })
        } else if (pw === cpw) {
            //this.setState({ notice: "Pass the confirm step." })
            axios.put('/api/password', { password: pw }, { withCredentials: true }).then(function (response) {
                console.log(response);

            }).catch(function (error) {
                console.log(error);
            })

            this.setState({ notice: "Your password has changed. Please remember your new password, and login again." })
        }
    };

    render() {
        return (
            <section>
                <h3>Login Information</h3>
                <form className="" >
                    <div className="row">
                        <div className="col-sm-12">
                            <label className="control-label">Password:</label>

                            <input type="password" className="form-control" id="password" onChange={e => { { this.setState({ password: e.target.value }) } }} />

                        </div>
                        <div className="col-sm-12">
                            <label className="control-label">Confirm:</label>

                            <input type="password" className="form-control" id="confirmPassword" onChange={e => { this.setState({ confirmPW: e.target.value }) }} />
                            <p>{this.state.notice}</p>

                        </div>
                        <div className="col-sm-12">
                            <div className="btn-div">
                                <button href="#" className="btn btn-success pull-right" onClick={this.handleUpdatePassword} >Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        )
    }

}