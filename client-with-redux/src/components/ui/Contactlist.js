import React, { useEffect } from 'react';
import CreateBtn from '../containers/CreateBtn';
import ContactUnit from './ContactUnit';



const Contactlist = ({ contacts, pending, error, loadContactlist }) => {

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

    return (
        <div>
            <div>
                {pending && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading ico" />}
            </div>
            <div>
                <div style={{ margin:"20px"}}>
                    <h4 style={{ display: "inline-block", fontWeight:"bold" }}>CONTACT</h4>
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

        </div>
    )

}

export default Contactlist;