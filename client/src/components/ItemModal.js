import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
//Redux state inside React component = container
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class itemModal extends Component {
  state = {
    modal: false,
    name: '' // Just because we have an application state throught redux it doesn't means we can't have component state
    //'cus somethings belongs to the component and some other things belongs to the app and in case of forms we always want our form
    //to have a piece of state in the component
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }); //Instead of refering to state.name to change it we make the
    //object generating the event brings us the field we're referring to, so that's why the input has a name="name"
    //This way we don't need to create another onChange
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };
    //Add item via addItem action
    this.props.addItem(newItem);

    //Close the modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}>
          Add item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item"> Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={this.onChange}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Add item
              </Button>
            </FormGroup>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(itemModal);
