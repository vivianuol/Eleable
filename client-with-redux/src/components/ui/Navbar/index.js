import React from "react";
import { Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import "./style.css";


class Navbarr extends React.Component {

    handleLogout = () => {
        const { onLogout } = this.props;
        onLogout();
        console.log("logout submited.")
    }

    render() {
        const { username } = this.props
        return (

            <Navbar expand="lg" bg="info" variant="dark" className="holder">




                <Navbar.Brand href="#home" className="logo">
                    ELEABLE
                        </Navbar.Brand>


                <NavDropdown className="dropDown" title="" id="collasible-nav-dropdown">
                    {/* <NavDropdown.Item href="#">My Account</NavDropdown.Item> */}
                    <NavDropdown.Item href="#" onClick={this.handleLogout}>Logout</NavDropdown.Item>


                </NavDropdown>


            </Navbar>


        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    pending: state.contacts.pending,
    error: state.contacts.error
})

const container = connect(mapStateToProps)(Navbarr)
export default container;