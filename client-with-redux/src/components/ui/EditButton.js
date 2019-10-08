import React, {useState} from "react";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const EditButton = ({contact, id, loadContactInfo, updateOneContact}) => {

  const [show, setShow] = useState(false);
  const [firstName,setFirstName] = useState(contact.first_name);
  const [lastName,setLastName] = useState(contact.last_name);
  const [phone,setPhone] = useState(contact.phone_number);
  const [email,setEmail] = useState(contact.email);
  const [social,setSocial] = useState(contact.social_link);

  let formData = new FormData();
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('phone_number', phone);
  formData.append('email', email);
  formData.append('social_link', social);
  formData.append('image', null);
 

  const handleShow = () => {
    setShow(true);
    console.log("id: " + id);
    loadContactInfo(id);
  };

  const handleUpdate = (data) => {
    console.log("Contact " + id + " is updated.")
    updateOneContact(id, data);
    setShow(false);
  }


  //打开Modal的时候load contact, so NOT componentDidMount()!
 



    return (
      <>
        <Button style={{margin: "0 10px"}} variant="outline-primary" onClick={()=> handleShow()}>Edit</Button>
        <Modal animation={false} show={show} backdrop={false}>
          <Modal.Body>
            <label htmlFor="basic-url">Contact Name</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  first Name:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={contact.first_name} onChange={(e)=>{setFirstName(e.target.value); console.log('firstname: ' + e.target.value)}} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  last Name:
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={contact.last_name} onChange={(e)=>setLastName(e.target.value)} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Phone</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  000-000-0000
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={contact.phone_number} onChange= {(e)=>setPhone(e.target.value)} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Email</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  johnsmith@yahoo.com
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={contact.email} onChange= {(e)=>setEmail(e.target.value)} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Social Link</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  LinkedIn/Facebook/Twitter/Instagram:
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={contact.social_link} onChange= {(e)=>setSocial(e.target.value)}id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            {/* <label htmlFor="basic-url">Change Profile Photo</label>
            <InputGroup>
              <FormControl type="file" />
            </InputGroup> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(formData)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ); 


}

export default EditButton;