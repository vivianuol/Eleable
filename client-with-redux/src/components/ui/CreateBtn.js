import React, {useState} from "react";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const CreateBtn = ({ postNewContact }) => {

  const [show, setShow] = useState(false);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [social,setSocial] = useState('');

  let formData = new FormData();
  formData.append('first_name', firstName);
  formData.append('last_name', lastName);
  formData.append('phone_number', phone);
  formData.append('email', email);
  formData.append('social_link', social);
  formData.append('image', null);
  // const updatedContact = {
  //   first_name: firstName,
  //   last_name: lastName,
  //   phone_number: phone,
  //   email: email,
  //   social_link: social,
  //   image: null
  // }

  const handleShow = () => {
    setShow(true);
  };

  const handlePost = (data) => {
    console.log("post the new contact.")
    postNewContact(data);
    setShow(false);
  }


    return (
      <>
        <Button variant="outline-info" style={{margin: "0 10px", float: "right"}} onClick={()=> handleShow()}>Add New</Button>
        <Modal animation={false} show={show} backdrop={false}>
          <Modal.Body>
            <label htmlFor="basic-url">Contact Name</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  First Name:
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue='' onChange={(e)=>{setFirstName(e.target.value); console.log('firstname: ' + e.target.value)}} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Last Name:
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue='' onChange={(e)=>setLastName(e.target.value)} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Phone</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  000-000-0000
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue='' onChange= {(e)=>setPhone(e.target.value)} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Email</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  xxxxx@abc.com
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue='' onChange= {(e)=>setEmail(e.target.value)} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Social Link</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  LinkedIn/Facebook/Twitter/Instagram:
                          </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue='' onChange= {(e)=>setSocial(e.target.value)}id="basic-url" aria-describedby="basic-addon3" />
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
            <Button variant="primary" onClick={() => handlePost(formData)}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ); 


}

export default CreateBtn;