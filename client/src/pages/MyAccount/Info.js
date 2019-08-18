import React from "react";
import "./style.css";
import axios from "axios";

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            aboutme: "",
            notice: ""
        };
        this.handleUpdateInfo = this.handleUpdateInfo.bind(this);
    }

    fetchUserInfo() {
        //NOTICE: Each time you need user_data, you have to use {withCredentials: true}
        axios.get('/api/user', { withCredentials: true }).then(res => {
            //console.log("response" + JSON.stringify(res));
            console.log("----------------");
            console.log(res.data);
            this.setState({
                name: res.data.name ? res.data.name : "Your name",
                email: res.data.email ? res.data.email : "",
                phoneNumber: res.data.phoneNumber ? res.data.phoneNumber : "000-000-0000",
                address: res.data.address ? res.data.address : "1100 Congress Ave",
                city: res.data.city ? res.data.city : "Austin",
                state: res.data.state ? res.data.state : "TX",
                zip: res.data.zip ? res.data.zip : "10000",
                aboutme: res.data.aboutme ? res.data.aboutme : "briefly introduce youself."
            })
        })
    };

    componentDidMount() {
        this.fetchUserInfo();
    }

   
    handleUpdateInfo(event) {
        event.preventDefault();
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
        axios.put('/api/user/', userInfo, {
            withCredentials: true,
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <section>
                <h3>Contact Information</h3>
                <form className="ng-pristine ng-valid">
                    <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="inputName" className="control-label">name: </label>
                            <input type="text" className="form-control" id="inputName" value={this.state.name} onChange={e => {
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
                            <input type="text" className="form-control" id="city" value={this.state.city} onChange={e => {
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
        )
    }
}