import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import axios from 'axios';

class MyAccount extends React.Component {
    constructor() {
        super()
        this.state = {
            password: "",
            confirmPW: "",
            name: "Your name",
            email: "",
            phoneNumber: "000-000-0000",
            address: "12430 Metric Blvd",
            city: "Austin",
            state: "TX",
            zip: "78758",
            aboutme: "briefly introduce yourself.",
            notice: ""

        };

        this.handleUpdateInfo = this.handleUpdateInfo.bind(this);
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
    }

    fetchUserInfo() {
        //NOTICE: Each time you need user_data, you have to use {withCredentials: true}
        axios.get('http://192.168.0.11:8080/user', { withCredentials: true }).then(res => {
            //console.log("response" + JSON.stringify(res));
            console.log("----------------");
            console.log(res.data);
            this.setState({
                name: res.data.name? res.data.name:"Your name",
                email: res.data.email? res.data.email:"",
                phoneNumber: res.data.phoneNumber? res.data.phoneNumber:"000-000-0000",
                address: res.data.address? res.data.address:"1100 Congress Ave",
                city: res.data.city? res.data.city: "Austin",
                state: res.data.state? res.data.state: "TX",
                zip: res.data.zip? res.data.zip: "10000",
                aboutme: res.data.aboutme? res.data.aboutme: "briefly introduce youself."
            })
        })
    };

    componentDidMount() {
        this.fetchUserInfo();
    }

    handleUpdateInfo() {

        let userInfo = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            aboutme: this.state.aboutme
        }
        axios.put('http://192.168.0.11:8080/user/', userInfo, {
            withCredentials: true,
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

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
            axios.put('http://192.168.0.11:8080/password', { password: pw }, { withCredentials: true }).then(function (response) {
                console.log(response);
                
            }).catch(function (error) {
                console.log(error);
            })

            this.setState({ notice: "Your password has changed. Please remember your new password, and login again." })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="myaccount">
                    <div className="ui-67">
                        <div className="ui-head bg-lblue">

                            <div className="ui-details">
                                <h3 id="name-header"> {this.state.name}</h3>
                                <h4>Your title</h4>
                            </div>

                            <div className="ui-image">
                                <img src={this.state.image ? this.state.image : "/img/user.png"} alt="Profile" className="img-responsive" width="100" height="100" />
                            </div>
                        </div>

                        <div className="ui-content">

                            <div className="row">
                                <div className=" acc-col">
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
                                                        <button href="https://creativethoughtz.com" className="btn btn-success pull-right" onClick={this.handleUpdatePassword} >Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </section>

                                    <section>
                                        <h3>Contact Information</h3>
                                        <form className="ng-pristine ng-valid">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label htmlFor="inputName" className="control-label">name: </label>
                                                    <input type="text" className="form-control" id="inputName" value={this.state.name } onChange={e => {
                                                        this.setState({ name: e.target.value })
                                                    }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="email" className="control-label">Email:</label>
                                                    <input type="email" className="form-control" id="inputEmail" value={this.state.email} onChange={e => {
                                                        this.setState({ email: e.target.value })
                                                    }} />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="phone-number" className="control-label">Phone Number:</label>
                                                    <input type="text" className="form-control" id="phoneNumber"
                                                        value={this.state.phoneNumber} onChange={e => {
                                                            this.setState({ phoneNumber: e.target.value })
                                                        }} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="address" className="control-label">Address:</label>
                                                    <input type="text" className="form-control" id="address"
                                                        value={this.state.address} onChange={e => {
                                                            this.setState({ address: e.target.value })
                                                        }} />
                                                </div>
                                                <div className="col-sm-4">
                                                    <label htmlFor="city" className="control-label">City:</label>
                                                    <input type="text" className="form-control" id="city" value={this.state.city } onChange={e => {
                                                        this.setState({ city: e.target.value })
                                                    }} />
                                                </div>

                                                <div className="col-sm-2">
                                                    <label htmlFor="state" className="control-label">State:</label>
                                                    <input type="text" className="form-control" id="state" value={this.state.state} onChange={e => {
                                                        this.setState({ state: e.target.value })
                                                    }} />
                                                </div>

                                                <div className="col-sm-2">
                                                    <label htmlFor="zipcode" className="control-label">Zipcode:</label>
                                                    <input type="text" className="form-control" id="zipcode" value={this.state.zip} onChange={e => {
                                                        this.setState({ zip: e.target.value })
                                                    }} />
                                                </div>
                                            </div>


                                            <h3>Personal Information</h3>

                                            <div className="row">

                                                <div className="col-sm-12">
                                                    <label htmlFor="aboutme" className="col-sm-12 control-label">About Me:</label>
                                                    <div className="">
                                                        <textarea rows="5" className="form-control" id="aboutme" value={this.state.aboutme} onChange={e => { this.setState({ aboutme: e.target.value }) }}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="btn-div">
                                                        <button href="#" className="btn btn-success pull-right" onClick={this.handleUpdateInfo}>Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccount;