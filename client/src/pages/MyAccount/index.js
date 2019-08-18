import React from "react";
import "./style.css"
import Navbar from "../../components/Navbar";
import PersonalInfo from "./Info";
import Password from "./Password";
import axios from "axios";

class MyAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
        }
    }

    fetchUserInfo() {
        //NOTICE: Each time you need user_data, you have to use {withCredentials: true}
        axios.get('/api/user', { withCredentials: true }).then(res => {
            //console.log("response" + JSON.stringify(res));
            console.log("-------@@-------");
            console.log(res.data);
            this.setState({
                name: res.data.name ? res.data.name : "Your name"
            })
        })
    };

    componentDidMount() {
        this.fetchUserInfo();
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
                            </div>

                            <div className="ui-image">
                                <img src={this.state.image ? this.state.image : "/img/user.png"} alt="Profile" className="img-responsive" width="100" height="100" />
                            </div>
                        </div>

                        <div className="ui-content">
                            <div className="row">
                                <div className=" acc-col">
                                    <Password />
                                    <PersonalInfo />

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