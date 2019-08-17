import React from "react";
import axios from "axios";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.toggleShow = this.toggleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleShow() {
        this.setState({show: !this.state.show})
    }

    handleSubmit() {
        axios.get('/logout', () => {
            console.log('logout');
        }).then(res => {
            window.location.replace('login') 
        })
    }

    render() {
        return (

            <nav className="mb-4 navbar navbar-expand-lg navbar-dark cyan">
                <img className="navbar-brand font-bold" href="#" src="img/eleable_logo.svg" alt="eleable-logo"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul className="navbar-nav ml-auto" style={ {fontSize:"1.5rem"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="/addressbook"><i className="fa fa-gear"></i> Home</a>
                        </li>
                        <li className="nav-item dropdown" >
                            <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleShow}>
                            <i className="fa fa-user" ></i> My Account </span>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink-4" style={this.state.show? {display:"block"} : {display: "none"}}>
                                <a className=" dropdown-item" href="/myaccount">My account</a>
                                <span className=" dropdown-item" onClick={this.handleSubmit}>Log out</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;