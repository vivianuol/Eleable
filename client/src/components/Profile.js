import React, { Component } from "react";
import "./Profile.css";
import Navbar from "./Navbar";
import axios from 'axios';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    fetchUserInfo() {
        //NOTICE: Each time you need user_data, you have to use {withCredentials: true}
        axios.get('http://localhost:8080/user', { withCredentials: true }).then(res => {
            //console.log("response" + JSON.stringify(res));
            console.log("***------------------***");
            console.log(res.data);
            this.setState({
                user: res.data
            })
        })
    };

    componentDidMount() {
        this.fetchUserInfo();
    }

    handleSubmit() {
        axios.get('http://localhost:8080/logout', () => {
            console.log('logout');
        }).then(res => {
            window.location.replace('login')
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 img">
                            <img src={this.state.image ? this.state.image : 'img/user.png'} alt="" className="img-rounded" />
                        </div>
                        <div className="col-md-6 details">
                            
                                <h5>{this.state.user.name?this.state.user.name:"Your name"}</h5>
                                <blockquote>
                                <p>{this.state.user.city? this.state.user.city: "city"}, {this.state.user.state? this.state.user.state: "state"}, {this.state.user.zip? this.state.user.zip: "zip"}  <i className="icon-map-marker"></i></p>
                            </blockquote>
                            <p>
                                {this.state.user.email}<br /> {this.state.user.phoneNumber}<br />
                                
                            </p>
                            <blockquote>{this.state.user.aboutme}<br />
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;