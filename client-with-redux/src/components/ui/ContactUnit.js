import React from 'react';

function ContactUnit ({contact}) {
    return (
        <div style={{ width: "20rem", margin: "15px", backgroundColor: "#F5FBEF" }}>
        <div>
            <h2>{contact.first_name}, {contact.last_name}</h2>
            <h4>Phone: {contact.phone_number}</h4>
            <h4>Email:  {contact.email}</h4>
            <h4>Social link:  {contact.social_link == null? '' :contact.social_link}</h4>
        </div>
        {/* <Button variant="outline-primary" onClick={this.handleShow}>Edit</Button> */}
        <button>Edit</button>
        <button variant="outline-danger" onClick={this.handleDelete}>Delete</button>
    </div>
    )
}

export default ContactUnit;