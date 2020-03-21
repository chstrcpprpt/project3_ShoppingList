import React from "react";
import NavbarApp from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShoppingListFruitAndVeg from "./components/ShoppingListFruitAndVeg";
import ShoppingListFridge from "./components/ShoppingListFridge";

function App() {
  return (
    <Provider store={store}>
      <div 
        className="App" 
        style={{backgroundColor: "lavender", minHeight: "100vh"}}>
        <NavbarApp />
        <Container>
          <ItemModal />
          <ShoppingList />
          <div
          style={{margin: "1rem 0"}}>
            Fruit & veg
          </div>
          <ShoppingListFruitAndVeg />
          <div
          style={{margin: "1rem 0"}}>
            Fridge
          </div>
          <ShoppingListFridge />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
