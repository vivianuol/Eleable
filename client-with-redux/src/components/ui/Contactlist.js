import React, { useEffect } from 'react';
import { BallSpinner } from "react-spinners-kit";
import CreateBtn from '../containers/CreateBtn';
import ContactUnit from './ContactUnit';



const Contactlist = ({ contacts, pending, error, loadContactlist, type, color }) => {

    //for componentDidMount, remember to add ,[] as the second argument in useEffect, or you'll run into an infinit loop.
    useEffect(() => {
        loadContactlist();
        console.log('contactlist loaded.');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // shouldComponentRender = () => {
    //     const {pending} = this.props;
    //     if(pending === false) return false;
    //     // more tests
    //     return true;
    // }
    if (pending)
        return (
            <div style={{  position: "absolute", top: "15rem",
                left: "50%",
                transform: "translate(-50%, -50%)"}}>
                <BallSpinner
                    size={100}
                    color="#8FD8D2"
                    loading={pending}
                />
            </div>

        )

    else return (

        <div>
            <div style={{ margin: "20px" }}>
                <h3 style={{ display: "inline-block", fontWeight: "bold" }}>CONTACTS</h3>
                <CreateBtn style={{ display: "inline-block", }} />
            </div>

            <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {contacts.map((contact, id) =>
                        <ContactUnit key={id} id={id} contact={contact} />

                    )}
                </div>
            </div>

        </div>

    )

}

export default Contactlist;