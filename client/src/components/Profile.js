import React, { Component } from "react";
import "./Profile.css";
import Navbar from "./Navbar";
//import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            name: "Fiona Gallagher",
            phone_number: "",
            email: "",
            website: "",
            birthday: "2-22-1998",
            image: 'img/user.png'
        }
    }

    fetchUserInfo() {
        //NOTICE: Each time you need user_data, you have to use {withCredentials: true}
        axios.get('http://localhost:8080/api/user_data', { withCredentials: true }).then(res => {
            console.log("response" + JSON.stringify(res));
            this.setState({
                email: res.data.email
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
                            <img src={this.state.image} alt="" className="img-rounded" />
                        </div>
                        <div className="col-md-6 details">
                            <blockquote>
                                <h5>{this.state.name}</h5>
                                <small><cite title="Source Title">Chicago, United States of America  <i className="icon-map-marker"></i></cite></small>
                            </blockquote>
                            <p>
                                {this.state.email}<br /> {this.state.website}<br />
                                {this.state.birthday}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;