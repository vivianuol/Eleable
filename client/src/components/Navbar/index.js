import React from "react";
import axios from "axios";
import "bootstrap";



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
        this.setState({ show: !this.state.show })
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
                <img className="navbar-brand font-bold" href="#" src="img/eleable_logo.svg" alt="eleable-logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <ul className="navbar-nav ml-auto" style={{ fontSize: "1.5rem", float:"right" }}>
                            <li className="nav-item">
                                <a className="nav-link" href="/addressbook"><i className="fa fa-gear"></i> Home</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="/myaccount">My account</a></li>
                            <li className="nav-item" >
                                <a className="nav-link" href="#" onClick={this.handleSubmit}>Log out</a></li>
                           
                        </ul>
                 
                </div>
            </nav>

        )
    }
}

export default Navbar;