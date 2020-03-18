import React, { Component} from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      {id: uuidv4(), name: "Eggs"},
      {id: uuidv4(), name: "Milk"},
      {id: uuidv4(), name: "Bread"},
      {id: uuidv4(), name: "Pasta"},
    ]
  };

  render() {
    const { items } = this.state;
    return(
      <Container>
        <Button
        color="dark"
        style={{marginBottom: "2rem"}}
        onClick={() => {
          const name = prompt("Enter Item");
          if(name) {
            this.setState(state => ({
              items: [...state.items, {id: uuidv4(), name: name}]
            }));
          }
        }}
        >Add Item</Button>

        <ListGroup>
          {items.map(({ id, name }) => (
            <ListGroupItem>
              <Button
              className="remove-btn"
              color="danger"
              size="sm"
              onClick={() => {
                this.setState(state => ({
                  items: state.items.filter(item => item.id !== id)
                }));
              }}
              >&times;</Button>
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  };
};

export default ShoppingList;