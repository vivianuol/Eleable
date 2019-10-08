import React from 'react';
import EditButton from '../containers/EditButton';
import DeleteButton from '../containers/DeleteButton';

const ContactUnit = ({contact}) => {

        return (
            <div style={{ width: "20rem", margin: "15px", padding: "10px", backgroundColor: "#F5FBEF", borderRadius: "15px" }}>
            <div>
                <h2>              
                {contact.first_name}, {contact.last_name}</h2>
                <h4>Phone: {contact.phone_number}</h4>
                <h4>Email:  {contact.email}</h4>
                <h4>Social link:  {contact.social_link == null? '' :contact.social_link}</h4>
            </div>
            <EditButton style={{display: "inline-block"}} variant="outline-primary" id={contact.id} contact={contact} />
            <DeleteButton style={{display: "inline-block"}} id={contact.id} />         
        
            </div>
        )
    }
    



export default ContactUnit;