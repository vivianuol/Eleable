import React from "react";
// import {Row, Col} from 'react-bootstrap';
import Profile from "../components/Profile";
import AddNew from '../components/AddNew';
import Contactlist from "../components/ContactList";
import axios from 'axios';

class Addressbook extends React.Component {
    constructor () {
        super ();
        this.state = {
            contactlist: [],
            //the structure of contactlist is like:
            //{
            //     "id": 1,
            //     "first_name": "John",
            //     "last_name": "Wick",
            //     "phone_number": "914-000-8888",
            //     "email": "johnwick@hotmail.com",
            //     "social_link": null
            // }
            };
 
        this.fetchContactList = this.fetchContactList.bind(this);
        this.isUpdated = this.isUpdated.bind(this);
     }

     
    fetchContactList() {
        axios.get('/api/contacts/', {withCredentials: true}).then(res => {
        //console.log("@#$%^&*()")    
        //console.log(res)
        this.setState({ 
                contactlist: res.data.contacts
            })

        }).catch(function (error) {
            // handle error
            console.log(error);
            window.location.replace('login');
          })
    }

    componentDidMount() {
        this.fetchContactList();
    }

     isUpdated(id, method, obj) {
        console.log("pass isUpdated function to child component.")
        if (id !== null) {
        if (method === "delete") {
            this.setState((state) => {
                return { contactlist: state.contactlist.filter(contact => contact.id !== id) }
            })
        } if (method === "update") {
            this.setState((state) => {
                return { contactlist: ([...state.contactlist.filter(contact => contact.id !== id), obj].sort((a, b) => a.id - b.id)) }
            })
        } } else if ( id == null) {
            this.setState((state) => {
                return { contactlist: ([...state.contactlist, obj])}
            })
        }

    }

    render () {
        return (
            <div style={ { 
                display: 'flex', /*added*/
                flexDirection: 'column' }}>

                    <Profile />
                    <AddNew isUpdated = {this.isUpdated}/>
                    <Contactlist contactlist={this.state.contactlist} isUpdated = {this.isUpdated}  />

            </div>
        )
    }
}

export default Addressbook;