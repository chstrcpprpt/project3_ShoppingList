import React from "react";
import NavbarApp from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FruitAndVeg from "./components/FruitAndVeg";
import Fridge from "./components/Fridge";
import Pantry from "./components/Pantry";

function App() {
  return (
    <Provider store={store}>
      <div 
        className="App" 
        style={{backgroundColor: "lavender", minHeight: "100vh"}}>
        <NavbarApp />
        <Container>
          <ItemModal />
          <div
          style={{margin: "0 0 1rem 0"}}>
            Fruit & veg
          </div>
          <FruitAndVeg />
          <div
          style={{margin: "1rem 0"}}>
            Fridge
          </div>
          <Fridge />
          <div
          style={{margin: "1rem 0"}}>
            Pantry
          </div>
          <Pantry />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
