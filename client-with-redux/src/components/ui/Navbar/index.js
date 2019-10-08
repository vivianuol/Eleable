import React from "react";
import axios from "axios";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Navbarr extends React.Component {

    handleLogout = () => {
        const {onLogout} = this.props;
        onLogout();
        console.log("logout submited.")
    }

    render() {
        const {loginStatus, notice} = this.props
        return (

            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Navbar.Brand href="#home">
                    ELEABLE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav >
                        <NavDropdown title="username" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={this.handleLogout}>Logout</NavDropdown.Item>
                            
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Navbarr;