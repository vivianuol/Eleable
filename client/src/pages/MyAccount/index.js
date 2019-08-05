import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";

class MyAccount extends React.Component {
    constructor() {
        super()
        this.state = {
            personalInfo: {}
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
                                <h3 id="name-header">Steve Miller</h3>
                                <h4>Your title</h4>
                            </div>

                            <div className="ui-image">
                                <img src="/img/user.png" alt="Profile" className="img-responsive" width="100" height="100" />
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
                                                    <label htmlFor="inputEmail3" className="control-label">Password:</label>
                                                    <div className="">
                                                        <input type="password" className="form-control" id="inputEmail3" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <label htmlFor="inputPassword3" className="control-label">Confirm:</label>
                                                    <div className="">
                                                        <input type="password" className="form-control" id="inputPassword3" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="btn-div">
                                                        <a href="https://creativethoughtz.com" className="btn btn-success pull-right">Update</a>
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
                                                    <label htmlFor="inputName" className="control-label">Name:</label>
                                                    <input type="text" className="form-control" id="inputName" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="inputEmail3" className="control-label">Email:</label>
                                                    <input type="email" className="form-control" id="inputEmail3" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="inputPassword3" className="control-label">Phone Number:</label>
                                                    <input type="text" className="form-control" id="inputPassword3" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="inputEmail3" className="control-label">Address:</label>
                                                    <input type="email" className="form-control" id="inputEmail3" />
                                                </div>
                                                <div className="col-sm-4">
                                                    <label htmlFor="inputPassword3" className="control-label">City:</label>
                                                    <input type="text" className="form-control" id="inputPassword3" />
                                                </div>

                                                <div className="col-sm-2">
                                                    <label htmlFor="inputPassword3" className="control-label">State:</label>
                                                    <input type="text" className="form-control" id="inputPassword3" />
                                                </div>

                                                <div className="col-sm-2">
                                                    <label htmlFor="inputPassword3" className="control-label">Zipcode:</label>
                                                    <input type="text" className="form-control" id="inputPassword3" />
                                                </div>
                                            </div>


                                            <h3>Personal Information</h3>

                                            <div className="row">

                                                <div className="col-sm-12">
                                                    <label htmlFor="inputPassword3" className="col-sm-12 control-label">About Me:</label>
                                                    <div className="">
                                                        <textarea rows="5" className="form-control" id="inputPassword3"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="btn-div">
                                                        <a href="https://creativethoughtz.com" className="btn btn-success pull-right">Update</a>
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