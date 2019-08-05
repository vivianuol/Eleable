import React from "react";
import axios from "axios";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

class EditButton extends React.Component {
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
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.fetchContactValue = this.fetchContactValue.bind(this);

  }

  handleCancel() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log("id: " + this.props.id);
    this.fetchContactValue(this.props.id)
  }

  fetchContactValue(id) {
    axios.get(`http://localhost:8080/contacts/${id}`, {withCredentials: true})
      .then((response) => {
        // console.log(response.data[0]);
        // let defaultValue = response.data[0];
        console.log("***************");
        console.log(response.data.contacts[0]);

        let contact = response.data.contacts[0];
        this.setState(() => { 
          return {
            first_name: contact.first_name,
            last_name: contact.last_name,
            phone_number: contact.phone_number !== null ? contact.phone_number : '',
            email: contact.email,
            social_link: contact.social_link !== null ? contact.social_link : '',
            image: contact.image !== null ? contact.image : 'IMAGE-1563737508573.JPG'
          }
        })

      }).catch(function (error) {
        // handle error
        console.log(error);
        window.location.replace('login');
      });
  }

  handleUpdate() {
    let formData = new FormData();
    formData.append('first_name', this.state.first_name);
    formData.append('last_name', this.state.last_name);
    formData.append('phone_number', this.state.phone_number);
    formData.append('email', this.state.email);
    formData.append('social_link', this.state.social_link);
    if (this.state.image !==null )
      formData.append('image', this.state.image) 

    
    axios.put(`http://localhost:8080/contact/${this.props.id}`, 
      formData, {
        headers: {
          'content-Type':
          'multipart/form-data'
        },
        withCredentials: true,
      }
    ).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({ show: false });
    
    var obj = {
      id: this.props.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      email: this.state.email,
      social_link: this.state.social_link,
      image: this.state.image
    }

    this.props.isUpdated(this.props.id, "update", obj)
  }

  render() {
    return (
      <>
        <Button variant="outline-primary" onClick={this.handleShow}>Edit</Button>
        <Modal animation={false} show={this.state.show} onHide={this.handleClose} backdrop={false}>
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
            <label htmlFor="basic-url">Change Profile Photo</label>
            <InputGroup>
              <FormControl type="file" onChange={e => this.setState({ image: e.target.files[0] })} />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCancel}>
              Cancel
                    </Button>
            <Button variant="primary" onClick={this.handleUpdate}>
              Update
                    </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

}

export default EditButton;