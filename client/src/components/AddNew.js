import React from "react";
import axios from "axios";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';



class AddNew extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      social_link: '',
      image: null
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit() {
    let formData = new FormData();
    formData.append('first_name', this.state.first_name);
    formData.append('last_name', this.state.last_name);
    formData.append('phone_number', this.state.phone_number);
    formData.append('email', this.state.email);
    formData.append('social_link', this.state.social_link);
    formData.append('image', this.state.image)
    //in formData.append("name", state_feild), 'name' is the FormControl name, state_feild is the state name.
    console.log(formData)
    axios.post('/api/contact',
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      }
    ).then(function () {
      console.log('SUCCESS!!');
    })
      .catch(function () {
        console.log('FAILURE!!');
      });

    let newContact = {
      id: 0,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      email: this.state.email,
      social_link: this.state.social_link,
      image: null
    }

    this.props.isUpdated(null, 'post', newContact)
    this.handleClose();
  }


  render() {
    return (
      <>
        <div onClick={this.handleShow}>
          <img style={{
            width: "5rem", display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '50%',
          }} src='/img/Add-New.png' alt='Add-New' />
        </div>

        <Modal animation={false} show={this.state.show} onHide={this.handleClose} backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="basic-url">Contact Name</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  first Name:
                    </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  last Name:
                    </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.last_name} onChange={e => { this.setState({ last_name: e.target.value }); console.log("lastname:" + this.state.last_name) }} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Phone</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  000-000-0000
                    </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.phone_number} onChange={e => this.setState({ phone_number: e.target.value })} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Email</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  johnsmith@yahoo.com
                    </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.email} onChange={e => this.setState({ email: e.target.value })} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Contact Social Link</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  LinkedIn/Facebook/Twitter/Instagram:
                    </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.social_link} onChange={e => this.setState({ social_link: e.target.value })} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <label htmlFor="basic-url">Upload Profile Photo</label>
            <InputGroup>
              <FormControl type="file" onChange={e => this.setState({ image: e.target.files[0] })} />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
              </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
              </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddNew;