import React from "react";
import { Card, Button } from "react-bootstrap";
import EditButton from './EditButton'
import axios from 'axios';

class ContactUnit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
        console.log("popup Modal: " + this.state.show)
    }

    handleDelete() {
        axios.delete(`http://localhost:8080/contact/${this.props.id}`,{ withCredentials: true})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.props.isUpdated(this.props.id, "delete");
    }

    render() {
        return (

            <Card style={{ width: "20rem", margin: "15px", backgroundColor: "#F5FBEF" }}>
                <Card.Img style={{
                    width: "5rem", height:'5rem', display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '50%',
                    border: '1px solid gray'
                }} variant="top" src={this.props.image !== null ?"http://localhost:8080/uploads/" + this.props.image : "http://localhost:8080/uploads/IMAGE-1563737508573.JPG"} />
                <Card.Body>
                    <Card.Title>{this.props.first_name}, {this.props.last_name}</Card.Title>
                    <Card.Text>Phone: {this.props.phone_number}</Card.Text>
                    <Card.Text>Email:{this.props.email}</Card.Text>
                    <Card.Text>Social link:{this.props.social_link == null? '' :this.props.social_link}</Card.Text>
                </Card.Body>
                {/* <Button variant="outline-primary" onClick={this.handleShow}>Edit</Button> */}
                <EditButton id={this.props.id} first_name={this.props.first_name} last_name={this.props.last_name} phone_number={this.props.phone_number} isUpdated={this.props.isUpdated} />
                <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
            </Card>

        )
    }
}


export default ContactUnit;