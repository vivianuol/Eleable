import React from 'react';
import EditButton from '../containers/EditButton';
import DeleteButton from '../containers/DeleteButton';

const ContactUnit = ({ contact }) => {

    return (
        <div style={{ width: "20rem", margin: "15px", padding: "10px", backgroundColor: "#F5FBEF", borderRadius: "15px" }}>
            <div>
                <h4>
                    {contact.first_name}, {contact.last_name}
                </h4>
                <div>Phone: {contact.phone_number}</div>
                <div >Email:  <span style={{
                    overflowWrap: "break-word",
                    wordWrap: "break-word"
                }}>
                    {contact.email}
                </span></div>
                <div>Social link:  {contact.social_link == null ? '' : contact.social_link}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <EditButton style={{ display: "inline-block" }} variant="outline-primary" id={contact.id} contact={contact} />
                <DeleteButton style={{ display: "inline-block" }} id={contact.id} />
            </div>
        </div>
    )
}




export default ContactUnit;