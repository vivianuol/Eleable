import React from "react";
import ContactUnit from './ContactUnit';
import {CardColumns} from 'react-bootstrap';


class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <CardColumns style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                {this.props.contactlist.map(contact => <ContactUnit key={contact.id}
                    id={contact.id}
                    first_name={contact.first_name}
                    last_name={contact.last_name}
                    phone_number={contact.phone_number}
                    email={contact.email}
                    social_link={contact.social_link}
                    image={contact.image}
                    isUpdated={this.props.isUpdated} />)}
            </CardColumns>
        )
    }
}

export default ContactList;