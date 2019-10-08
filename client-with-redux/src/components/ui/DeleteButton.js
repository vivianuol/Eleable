import React from "react";
import { Button } from 'react-bootstrap';

const DeleteButton =({deleteContact, id}) => {

    const handleOnDelete = () => {
        deleteContact(id);
        console.log('deleteContact completed.')
        
    }

 
        return (
            <>
                <Button style={{margin: "0 10px"}}variant="outline-danger" onClick={handleOnDelete}>Delete</Button>
            </>
        )


}

export default DeleteButton;
