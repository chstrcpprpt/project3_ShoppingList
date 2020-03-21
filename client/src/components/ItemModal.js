import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    section: ""
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const newItem = {
      name: this.state.name,
      section: this.state.section
    }

    //Add item with AddItem action
    this.props.addItem(newItem);

    //Close modal
    this.toggle();

  }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: "2rem"}}
          onClick={this.toggle}
        >Add Item</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add To Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">
                  Item
                </Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="item" 
                  placeholder="Add shopping item" 
                  onChange={this.onChange} 
                />

                <Label for="section">
                  Section
                </Label>
                <Input 
                  type="text" 
                  name="section" 
                  id="section" 
                  placeholder="Add supermarket section" 
                  onChange={this.onChange} 
                />

                <Button color="dark" style={{marginTop: "2rem"}} block>Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);